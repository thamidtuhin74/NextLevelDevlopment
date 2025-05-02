{
  //using for make a single blook to TypeScript

  // Function in Typescript 2 types >> 1. Normal Function  , 2. Arrow Function

  function addition(num1: number, num2: number): number {
    return num1 + num2;
  }
  addition(5, 20);
  function summation(num1: number = 10, num2: number = 20): number {
    //we can add defaule value of parameter
    return num1 + num2;
  }
  summation(5, 20);

  const additionInArrow = (num1: number, num2: number): number => {
    return num1 + num2;
  };
  additionInArrow(15, 20);
  const summationInArrow = (num1: number = 20, num2: number = 99): number => {
    //we can add defaule value of parameter
    return num1 + num2;
  };
  summationInArrow(15, 20);

  // Method -> Function in an object

  const poorUser = {
    name: "Tuhin",
    balance: 0,
    addBalance(creditBalance: number): string {
      return `My new Balance is : ${this.balance + creditBalance}`;
    }, //Arrow Fnction Doesn't support 'this' in the object
  };

  const arr: number[] = [1, 2, 14, 1, 5];
  const newArray: number[] = arr.map((e: number): number => e * e);
}
