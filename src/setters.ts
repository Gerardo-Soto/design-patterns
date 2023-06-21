export class MyDate {
  // year: number = 0; === public year: number = 0;
  /*
  public year: number = 0;
  public month: number = 0;
  public day: number = 0;
  */

  // constructor in TypeScript
  constructor(
    public year: number = 2023,
    private _month: number = 12,
    private _day: number = 31
  ) {};

  get day() {
    return this._day
  }

  set day(newValue: number){
    if (newValue >= 1 && newValue <= 31) {
      this._day = newValue;
    } else {
      throw new Error('day out of range.');
    }
  }

  get month() {
    return this._month
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('Month out of range');
    }
  }

  public printFormat(): string {
    /** 1|01: January, 2|02:February, ... */
    // setting format: 01
    const day = this.addPadding(this._day);
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
      this._day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else if (type === 'years') {
      this.year += amount;
    } else {
      return;
    };
  };

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  };
};

const myDate = new MyDate(1994, 8, 17);
console.log(myDate.printFormat());
myDate.addDay(3, 'days');


console.log(`Day: ${myDate.day}`);
//myDate.day = 5;// X
console.log(`Is Leap year: ${myDate.isLeapYear}`);

console.log(`month 15: ${myDate.month = 15}`);


