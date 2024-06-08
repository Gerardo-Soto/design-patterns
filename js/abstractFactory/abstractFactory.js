/* Declare base products classes/interfaces for each product in the catalog.

* products interfaces:
* -mastodon
* -RhinoCar
*/
class ChevyCar {
  useGPS(){
    throw new Error('Method not implemented.');
  }
}

class CorvetteCar {
  useGPS(){
    throw new Error('Method not implemented.');
  }
}
/* step 2*/
class ChevySedanCar extends ChevyCar {
  useGPS(){
    console.log(`[Sedan] Chevy GPS`);
  }
}

class ChevyHatchbackCar extends ChevyCar {
  useGPS(){
    console.log(`[Hatchback] Chevy GPS`);
  }
}

class CorvetteSedanCar extends CorvetteCar {
  useGPS(){
    console.log(`[Sedan] Corvette GPS`);
  }
}

class CorvetteHatchbackCar extends CorvetteCar {
  useGPS(){
    console.log(`[Hatchback] Corvette GPS`);
  }
}

/*step 3*/
class CarAbstractFactory {
  createChevy(){
    throw new Error('Method createChevy not implemented.')
  }

  createCorvette(){
    throw new Error('Method createChevy not implemented.')
  }
}

/* step 4*/
class SedanCarFactory{
  createChevy(){
    return new ChevySedanCar();
  }

  createCorvette(){
    return new CorvetteSedanCar();
  }
}

class HatchbackCarFactory{
  createChevy(){
    return new ChevyHatchbackCar();
  }

  createCorvette(){
    return new CorvetteHatchbackCar();
  }
}

// step 5> use
function appCarFactory(factory){
  const chevy = factory.createChevy();
  const corvette = factory.createCorvette();

  chevy.useGPS();
  corvette.useGPS();
}

function CreateFactory(type) {
  const factories = {
    // Classes (step 4)
    sedan: SedanCarFactory,
    hatchback: HatchbackCarFactory,
  };

  // set a Class
  const Factory = factories[type];
  return new Factory();
}

appCarFactory(CreateFactory('sedan'));
appCarFactory(CreateFactory('hatchback'));

//appCarFactory(new SedanCarFactory());
//appCarFactory(new HatchbackCarFactory());
