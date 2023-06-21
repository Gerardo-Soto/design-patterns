// Interface
interface Animal {
  eat() : void;
}

// Interfaces adicionales para funcionalidades específicas
interface Swimmer {
  swim() : void;
}

interface Flyer {
  fly() : void;
}

// Implementación de clases con las interfaces necesarias
class Dolphin implements Animal, Swimmer {
  eat(): void {
    console.log('Dolphin is eating');
  }

  swim(): void {
    console.log('Dolphin is swimming');
  }
}

class Eagle implements Animal, Flyer {
  eat(): void {
    console.log('Eagle is eating');
  }

  fly(): void {
    console.log('Eagle is flying');
  }
}

// Uso de las clases
const dolphin = new Dolphin();
dolphin.eat();
dolphin.swim();

const eagle = new Eagle();
eagle.eat();
eagle.fly();
