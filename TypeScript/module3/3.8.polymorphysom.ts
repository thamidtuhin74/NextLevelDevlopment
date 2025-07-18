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
}
