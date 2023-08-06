import { ProductHttpService } from './services/product-http.service';


(async () => {
  console.log('start');
  const productService = ProductHttpService.create();
  console.log('productService created');

  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map(item => item.price));

  console.log('end');


  const productId = products[0].id;
  console.log(products[0].id, products[0].title, products[0].price);

  await productService.update(productId, {
    price: 538
  });

  const productUpdated = await productService.findOne(productId);
  console.log(productUpdated.price);

})();
