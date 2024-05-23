/**
 * How to implement Builder
 *
 * 1. Declare base builder base class/interface who will define
 *  the general steps for build products, each builder must
 *  implement functionality for these steps.
 *
 * Base builder:
 *  - CarProductionLine
 *
 * Build steps:
 *  - setAirBags
 *  - setColor
 *  - setEdition
 *  - resetProductionLine
 *
 * 2. Implement concrete builders subclasses that offer different
 *  versions of the build steps. These builders could create
 *  concrete products or base ones. Depends on what we need.
 *
 *  SedanProductionLine: build() -> {Mastodon|Rhino}Car | Car
 *  RhinoProductionLine: build() -> {Mastodon|Rhino}Car | Car
 *
 * 3. Implement Product classes, these ones could not inherit/implement
 *  from base class/interface.
 *
 *  For the problem we will make the builder returns the
 *  product base class.
 *
 *  Base product:
 *    - BaseCar
 *
 *  Concrete products:
 *    - MastodonSedanCar
 *    - RhinoSedanCar
 *
 * 4. Implement director class, this one will know the build
 *  process for each product, so we can create specific
 *  configurations for the products.
 *
 *  Product representations
 *      constructCvtEdition
 *      constructSignatureEdition
 *
 * Notes:
 *  The code of this file has some modifications with the version showed
 *  during the course.
 *
 *  Change 1: In resetProductionLine function, the cars to be created
 *  must be sedan cars (mastodon sedan, rhino sedan), since the production
 *  line don't create sedans, but receive and personalize sedan cars to
 *  match different versions (CVT, Signature).
 *
 *  Change 2: Rename model to modelToCustomizeInLine as the param to be passed
 *  in production line object creation.
 *
 *  Change 3: Renamed Car class to BaseCar.
 *
 *  Change 4: Renamed class MastodonCar to MastodonSedanCar.
 *
 *  Change 5: Renamed class RhinoCar to RhinoSedanCar.
 *
 *  Change 6: Delete function setModel and remove function call at build
 *  method in SedanProductionLine class. Make the model assignment directly
 *  in Mastodon and Rhino car classes constructors.
 *
 *  Change 7: Add more comments to code.
 *
 *  Change 8: Renamed file to builder.main.js
 */

// STEP 1
/*1. Declare base builder base class/interface who will define
 *  the general steps for build products, each builder must
 *  implement functionality for these steps.
 *
 * Base builder:
 *  - CarProductionLine
 *
 * Build steps:
 *  - setAirBags
 *  - setColor
 *  - setEdition
 *  - resetProductionLine
 *
*/
class CarProductionLine {
  // abstract
  setAirBags(airBagsNumber){
    throw new Error('Method not implemented');
  };
  setColor(color){
    throw new Error('Method not implemented');
  };
  setEdition(edition){
    throw new Error('Method not implemented');
  };
  resetProductLine(){
    throw new Error('Method not implemented');
  };
}

// Step 2
/*** 2. Implement concrete builders subclasses that offer different
 *  versions of the build steps. These builders could create
 *  concrete products or base ones. Depends on what we need.
 *
 *  SedanProductionLine: build() -> {Mastodon|Rhino}Car | Car
 *  RhinoProductionLine: build() -> {Mastodon|Rhino}Car | Car
  */
class SedanProductionLine extends CarProductionLine{
  constructor({ model }){
    // implement father class
    super();

    // internal model
    this.setInternalModel(model);
    // create model:
    this.resetProductLine();
  }

  setAirBags(bags){
    this.sedanCar.bags = bags;
    return this;
  }
  setColor(color){
    this.sedanCar.color = color;
    return this;
  }
  setEdition(edition){
    this.sedanCar.edition = edition;
    return this;
  }
  setInternalModel(model){
    this.internalModel = model;
  }

  // out of Product Line
  setModel(){
    this.sedanCar.model = 'sedan'// sedan <-  SedanProductionLine
  }

  resetProductLine(){
    this.sedanCar = this.internalModel === 'mastodon'? new Mastodon() : new Rhino();
  }

  // Build function
  build(){
    // set model
    this.setModel();
    // save the product
    const sedanCar = this.sedanCar;
    // reset product line
    this.resetProductLine();
    // return the product
    return sedanCar;
  }
}

// Step 3
class Car {
  constructor(){
    this._edition = '';
    this._model = '';
    this._airBags = 2;// default
    this._color = 'black';// default
  }

  set airBags(airbags){
    this._airBags = airbags;
  }
  set color(color){
    this._color = color;
  }
  set model(model){
    this._model = model;
  }
  set edition(edition){
    this._edition = edition;
  }
}

class Mastodon extends Car{
  constructor(){
    super();
  }
}

class Rhino extends Car{
  constructor(){
    super();
  }
}

// step 4
class Director{
  // Director gets a Builder, and this Director controls the steps using this builder
  setProductionLine(productionLine){
    this.productionLine = productionLine;
  }

  // step 1
  constructCvtEdition(){
    /*
    this.productionLine.setAirBags(4);
    this.productionLine.setColor('turquoise');
    this.productionLine.setEdition('CVT')
    */
    // those methods return a instance 'this', so we can concat more methods
    this.productionLine.setAirBags(4).setColor('turquoise').setEdition('CVT');
  }

  constructSignatureEdition(){
    this.productionLine.setAirBags(8).setColor('white').setEdition('Signature');
  }

}

// use the director function:
function appBuilder(director){
  // create a product line, WITH the steps to create a 'mastodon'
  const mastodonSedanProductionLine = new SedanProductionLine({ model: 'mastodon'});

  // order to create the product
  director.setProductionLine(mastodonSedanProductionLine);
  director.constructCvtEdition();// set configuration
  const mastodonSedanCvt = mastodonSedanProductionLine.build();// build this product

  console.log(mastodonSedanCvt);


  director.constructSignatureEdition();
  const mastodonSedanSignature = mastodonSedanProductionLine.build();
  console.log(mastodonSedanSignature);
}

appBuilder(new Director());
