// creating an object from Date class:
const date = new Date();

//Methods of the class Date:
date.getHours();
date.getMinutes();

const setDate = new Date(1994, 7, 17);// 0: January, 1: February
setDate.getDay();

console.log(date);
console.log(setDate);


export class MyDate {
  year: number = 0;
  month: number = 0;
  day: number = 0;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(1994, 7, 17);
console.log(myDate);
