{
  // Abstraction 1. Usng Interface; 2. bastration

  {
    //   using Interface;

    //   idea
    interface Vehicle {
      // name: string;
      // model: string;
      // price: number;
      startEngine(): void;
      stopEngine(): void;
      move(): void;
    }

    //   const car1: Vehicle = {
    //     name: "Toyota",
    //     model: "2000",
    //     price: 45000,
    //   };

    //   real Impletations
    class Car implements Vehicle {
      startEngine(): void {
        console.log("Stating Engine from instance");
      }
      stopEngine(): void {
        console.log("Stop ENgine from instance");
      }
      move(): void {
        console.log("Moveing Car from instance");
      }
      test() {
        console.log("This is test from instance");
      }
    }

    const tototaCar = new Car();
    tototaCar.startEngine();
    tototaCar.move();
  }

  {
    // usnig Abstration Class

    abstract class Car2 {
      abstract startEngine(): void;
      abstract stopEngine(): void;
      abstract move(): void;
    }

    class HondaCar extends Car2 {
      startEngine(): void {
        console.log("Stating Engine from abstaction class");
      }
      stopEngine(): void {
        console.log("Stop Engine from abstaction class");
      }
      move(): void {
        console.log("Moveing Car from abstaction class");
      }
    }
    const hondaCar1 = new HondaCar();
    hondaCar1.startEngine();
    hondaCar1.move();
  }
}
