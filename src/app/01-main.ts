// this is and error:
//await
// because we need a asynchronous context to use await, their Scope should be asynchronous

import axios from "axios";

import { Product } from './models/product.model';

// anonymous function
// (() => {})();
(async() => {

  async function getProducts() {
    const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');

    // business code
    data.map( item => item.price);


    return data;
  };


  const products = await getProducts();
  console.log(products.map(item => item.id +' - '+ item.title));


})();
