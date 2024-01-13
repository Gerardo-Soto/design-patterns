/**
 * Create an only shopping car instance by client.
 * this shopping car only have a list of Products
 */
class ShoppingCar {
  static instance = undefined;

  constructor(){
    this.products = [];
  };

  // get instance singleton
  static getInstance(){
    if (!ShoppingCar.instance) {
      ShoppingCar.instance = new ShoppingCar();
    };

    return ShoppingCar.instance;
  };

  add(product){
    this.products.push(product);
  };

  deleteById(idProduct){
    this.products = this.products.filter((product) => product.id !== idProduct);
  };

  getProducts(){
    console.log(this.products);
  };
};

/**
 * This product has 3 attributes and 3 methods for get their value:
 * id, name and cost
*/
class Product{
  constructor(id, name, cost){
    this.id = id;
    this.name = name;
    this.cost = cost
  };

  getName(){
    return this.name;
  };
  getCost(){
    return this.cost;
  };
  getId(){
    return this.id
  };
};



function clientApp(){
  let product = new Product(0, 'jam', 52.10);
  console.log(product.getCost(), product.getName(), product.getId());

  const myShopCar = ShoppingCar.getInstance();
  myShopCar.add(product);
  product = new Product(1, 'cheese', 42.20);
  myShopCar.add(product);

  myShopCar.getProducts();

  myShopCar.deleteById(0);
  myShopCar.getProducts();
}

clientApp();
