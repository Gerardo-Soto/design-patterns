// this is and error:
//await
// because we need a asynchronous context to use await, their Scope should be asynchronous

import axios from "axios";

// anonymous function
// (() => {})();
(async() => {
  function delay(time: number) {
    const promise = new Promise<Number>((resolve, reject) => {
      setTimeout(() => {
        resolve(9%4);
      }, time);
    });
    return promise
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  };

  /**
   *
   */
  async function getProductsAsync() {
    const products = await axios.get('https://api.escuelajs.co/api/v1/products');
    return products.data;
  }

  const products = await getProducts();
  console.log(products.data);

  const answer = await delay(3000);
  console.log(answer);

  const products2 = await getProductsAsync();
  console.log(products2);





})();
