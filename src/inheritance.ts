export abstract class Animal {
  constructor(
    protected name: string
  ){};

  move() {
    console.log(`${this.name}, Moving along!`);
  };

  greeting() {
    return `hello, I'm ${this.name}`;
  };

  protected eat() {
    return `${this.name} is eating.`
  };
};

export class Dog extends Animal {
  // to add more properties, I have to use super
  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }

  speak(times: number) {
    console.log(`${this.name} ` + `woof `.repeat(times));
    console.log(this.eat());
  }

  move(): void {
      console.log(`${this.name} moving with 4 legs like a dog.`);
  }

  moveInheritance(): void {
    super.move();
  }
}

export class Bird extends Animal {
  fly(high: number) {
    console.log(`${this.name} flown ${high} yards.`);
  }
}

const animal = new Dog('Noelio', 'Fola');
const bird = new Bird('Tucan');

animal.move();
animal.moveInheritance();
console.log(animal.greeting());
animal.speak(3);
//console.log(animal.name);
console.log(animal.owner);


bird.fly(5);
bird.move();
