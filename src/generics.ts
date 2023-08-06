function getValue<T>(value: T): T {
  // create a list of type: myType
  const array: T[] = [value];

  console.log(array);
  return value;
}

getValue<number>(15).toFixed();
getValue<string>('0');
getValue<number[]>([]).forEach(e => e);

import { Dog } from './inheritance'

const dog = new Dog('Noelio', 'Fola');
getValue<Dog>(dog).greeting();
