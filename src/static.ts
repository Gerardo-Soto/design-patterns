/**
 * NO: const PI = new Math();
 */

console.log(Math.PI);

console.log(Math.max(1,3,2,8,4,6));

//my class Maty
export class MyMath {
  PI = 3.14159
}

const pi = new MyMath();
console.log(pi.PI);

export class MyMathLibrary {
  static readonly PI = 3.1415926;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max > item ? max : item);
  }
}
// readonly:
// MyMathLibrary.PI = 1.258; // X

console.log(`MyMathLibrary PI: ${MyMathLibrary.PI}`);
const numbers = [4,6,8,7];
console.log(`MyMathLibrary Max(${numbers}): ${MyMathLibrary.max(...numbers)}`);



