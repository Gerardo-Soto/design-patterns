














export class MyService {
  // save in memory this instance MyService or by default = null:
  static instance: MyService | null = null;

  // constructor by default: public
  // singleton: private
  private constructor(private name: string) {};

  static create(name: string) {
    // is there a instance:
    if (MyService.instance === null) {// there is no instance
      // create a instance
      MyService.instance = new MyService(name);
      console.log('Service created.');
    }
    // there is a instance
    return MyService.instance;

  };

  getName(){
    return this.name;
  };
};

const MyService1 = MyService.create('first');
console.log(MyService1.getName());

const MyService2 = MyService.create('second');
console.log(MyService2.getName());

const MyService3 = MyService.create('third');
console.log(MyService3.getName());

console.log(MyService1 === MyService2);
