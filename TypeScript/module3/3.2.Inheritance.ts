{
  // Inheritance
  class Student {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getSleep(noOfHours: number) {
      console.log(`Student ${this.name} is sleep ${noOfHours} hours in a day.`);
    }
  }

  const student1 = new Student("Mr. X", 18, "Dhaka");
  student1.getSleep(8);

  class StudentofArts extends Student {
    constructor(
      public name: string,
      public age: number,
      public address: string,
      public roll: number
    ) {
      super(name, age, address);
    }
    getRollNumber() {
      console.log(`The Roll number of ${this.name} is = ${this.roll}`);
    }
  }

  const artsStudent1 = new StudentofArts("artsStudent1", 22, "Ranpur", 901);
  artsStudent1.getSleep(10);
  artsStudent1.getRollNumber();
}
