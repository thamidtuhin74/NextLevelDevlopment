{
  // Statics

  class Counter {
    // count: number = 0; //Dynamic Memory alocation;
    static count: number = 0; //Static Memory alocation;
    increment() {
      //   return this.count++;
      return (Counter.count = Counter.count + 1);
    }
    decrement() {
      return (Counter.count = Counter.count - 1);
    }
    static incremen2x() {
      return (Counter.count = Counter.count + 2);
    }
  }

  const instance1 = new Counter();
  //   instance1.increment();
  //   instance1.increment();
  //   instance1.decrement();
  //   console.log(`instance 1: `, instance1);

  console.log(`instance 1: `, instance1.increment());
  console.log(`instance 1: `, instance1.increment());
  console.log(`instance 1: `, instance1.decrement());

  const instance2 = new Counter();
  //   instance2.increment();
  //   instance2.increment();
  //   instance2.decrement();
  console.log(`instance 2: `, instance2.increment());
  console.log(`instance 2: `, instance2.decrement());
  console.log(`instance 2: `, instance2.increment());

  console.log(`Count Form Static Functions: `, Counter.incremen2x());
}
