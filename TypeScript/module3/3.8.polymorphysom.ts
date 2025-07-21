{
  // Polymorphisom

  class Person {
    getSleep() {
      console.log("Sleeping 8Hr/day");
    }
  }

  class Student extends Person {
    getSleep(): void {
      console.log("Sleep 7hr/day");
    }
  }
  class Developer extends Person {
    getSleep(): void {
      console.log("Sleep 6hr/day");
    }
  }

  const getSleepingHr = (params: Person) => {
    params.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHr(person1);
  getSleepingHr(person2);
  getSleepingHr(person3);

  //   Example 2 👇👇👇

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    redius: number;

    constructor(redious: number) {
      super();
      this.redius = redious;
    }

    getArea(): number {
      return Math.PI * this.redius * this.redius;
    }
  }

  class rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return 0.5 * this.height * this.width;
    }
  }

  const circle1 = new Circle(2);
  // console.log(circle1.getArea());

  const rectangle1 = new rectangle(5, 4);
  // console.log(rectangle1.getArea());

  const shape1 = new Shape();

  const getShapeArea = (params: Shape) => {
    console.log(params.getArea());
  };

  getShapeArea(circle1);
  getShapeArea(rectangle1);
  getShapeArea(shape1);
}
