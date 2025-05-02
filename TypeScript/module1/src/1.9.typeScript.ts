{
  // Type Alias

  //   Type Alias in a Object👇👇👇
  type Student = {
    name: string;
    age: number;
    gender: "male" | "Female" | "Others";
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Tahmid Tuhin",
    age: 27,
    gender: "male",
    contactNo: "01798905167",
    address: "Rangpur, Bangladesh",
  };
  const student2: Student = {
    name: "Shovo Roy",
    age: 27,
    gender: "male",
    address: "Rangpur, Bangladesh",
  };

  //   Type Alias in others dataType 👇👇👇

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "admin";
  const isAdmin: IsAdmin = true;

  //   Type Alias in a function 👇👇👇

  type AdditionFunction = (num1: number, num2: number) => number;

  const add: AdditionFunction = (num1, num2) => num1 + num2;
}
