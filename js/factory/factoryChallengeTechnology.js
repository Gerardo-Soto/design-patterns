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

// step 1 > Base products
class CPUBase {
  setSeries(){
    return new Error ('Method CPUBase not implemented.');
  }
};

class DisplayBase {
  setResolution(resolution){
    return new Error ('Method CPUBase not implemented.');
  }
}

class MemoryBase {
  setCapacityInGb(gb){
    return new Error ('Method CPUBase not implemented.');
  }
}


//step 2 > Concrete products
class CPU extends CPUBase {
  setSeries(numberSeries) {
    console.log(`CPU: ${numberSeries}`);
  }
}

class Display extends DisplayBase {
  setResolution(resolution) {
    console.log(`Display: ${resolution}`);
  }
}

class Memory extends MemoryBase {
  setCapacityInGb(gb) {
    console.log(`GB: ${gb}`);
  }
}

//step 3 > Concrete factory
class DeviceAbstractFactory {
  makeCPU() {
    throw new Error('Method makeCPU not implemented.');
  }

  makeDisplay(){
    throw new Error('Method makeDisplay not implemented.');
  }

  makeMemory(){
    throw new Error('Method makeMemory not implemented.');
  }

}

//step 4 > Concrete factories
class PhoneFactory extends DeviceAbstractFactory {
  makeCPU() {
    return new CPU();
  }
  makeDisplay() {
    return new Display();
  }
  makeMemory() {
    return new Memory();
  }
}

class LaptopFactory extends DeviceAbstractFactory {
  makeCPU() {
    return new CPU();
  }
  makeDisplay() {
    return new Display();
  }
  makeMemory() {
    return new Memory();
  }
}

class TabletFactory extends DeviceAbstractFactory {
  makeCPU() {
    return new CPU();
  }
  makeDisplay() {
    return new Display();
  }
  makeMemory() {
    return new Memory();
  }
}

//step 5: use
function appFactory(factory, cpu, ram, resolution){
  const makeCpu = factory.makeCPU();
  const makeDisplay = factory.makeDisplay();
  const makeMemory = factory.makeMemory();

  makeCpu.setSeries(cpu);
  makeDisplay.setResolution(resolution);
  makeMemory.setCapacityInGb(ram);
}

function createFactory(type) {
  const factories = {
    laptop: LaptopFactory,
    phone: PhoneFactory,
    tablet: TabletFactory,
  };

  const Factory = factories[type];
  return new Factory;
};

appFactory(createFactory('laptop'), 'Intel i3', 4, '4k');
appFactory(createFactory('phone'), 'AMD 7', 8, '2k');
appFactory(createFactory('tablet'), 'SnapDragon', 16, '8k');
