/**
 * How to implement Factory
 *
 * 1.- Declare base product class/interface, this will be returned by
 * factory class and their sub classes.
 *
 * 2.- Implement concrete products sub classes that inherits/implements
 * the base product class/interface.
 *
 * 3.- Declare factory class/interface that return objects that match
 * the base product, not the concrete products.
 *
 * 4.- Implement concrete factories sub classes that inherits/implements
 * the base factory class/interface. These classes will return concrete
 * products in their factory method.
 *  */

// step 1
class BaseCar {
  showCost() {
    throw new Error('Method not implemented.');
  }
}

// step 2
class ChevyCar extends BaseCar {
  showCost() {
    console.log(`Chevy Car cost: 200,000 MXN`);
  }
}

class CorvetteCar extends BaseCar {
  showCost(){
    console.log(`Corvette Car cost: 2,000,000 MXN`);
  }
}


// step 3
class CarFactory {
  // sign/contract
  makeCar() {
    throw new Error(`Method not implemented.`);
  }
}

// step 4
class ChevyCarFactory extends CarFactory{
  makeCar() {
    return new ChevyCar();
  }
}

class CorvetteCarFactory extends CarFactory{
  makeCar(){
    return new CorvetteCar();
  }
}

// use
function appFactory(factory) {
  const car = factory.makeCar();
  car.showCost();
}

//appFactory(new ChevyCarFactory());
//appFactory(new CorvetteCarFactory());

// Factory Creation
function CreateFactory(type) {
  const factories = {
    chevy: ChevyCarFactory,
    corvette: CorvetteCarFactory,
  };

  // class Factory
  const Factory = factories[type];
  return new Factory();
}

appFactory(CreateFactory('chevy'));
appFactory(CreateFactory('corvette'));
