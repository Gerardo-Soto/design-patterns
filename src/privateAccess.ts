export class MyDate {
  // year: number = 0; === public year: number = 0;
  public year: number = 0;
  public month: number = 0;
  public day: number = 0;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  };

  public printFormat(): string {
    /** 1|01: January, 2|02:February, ... */
    // setting format: 01
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);

    return `${day}/${month}/${this.year}`;
  };

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return  `${value}`;
    };
  };

  addDay(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else if (type === 'years') {
      this.year += amount;
    } else {
      return;
    };
  };
};

const myDate = new MyDate(1994, 8, 17);
console.log(myDate.printFormat());
myDate.addDay(3, 'days');
//change public value
myDate.day = 2;

console.log(myDate.printFormat());
myDate.addDay(1, 'months');
console.log(myDate.printFormat());
myDate.addDay(5, 'years');
console.log(myDate.printFormat());
