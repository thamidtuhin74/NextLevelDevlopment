{
  // Interface
 //   Difference Between "Alias Type" & "Interface"👇👇👇
  type UserType = {
    name: string;
    age: number;
  };
  // type RollNumber = number;
  const user1: UserType = {
    name: "Tahmid Tuhin",
    age: 27,
  };

  interface UserInterface {
    name: string;
    age: number;
  }

  const user2: UserInterface = {
    name: "Tahmid Tuhin",
    age: 27,
  };
  
  // 1️⃣ for the primitive data type (number, string etc) will use "Alias Type"
  // 1️⃣ for the object we will use "Interface"

  // -----------------

  type UserTypeWithRole  =  UserType & {role : string}; // Type Extend

  const user1Extended: UserTypeWithRole = {
    name: "Tahmid Tuhin",
    age: 27,
    role: "admin"
  }

  interface UserInterfaceExtended extends UserInterface{
    role : string;
  }
  const user2extended: UserInterfaceExtended = {
    name: "Tuhin",
    age: 27,
    role: "CEO"
  }

  interface UserInterfaceExtendedWithType extends UserType{ //Interface with Type
     phone : number;
  }
  // 2️⃣ For extend Type Alias Use Intersection(&)
  // 2️⃣ For extend Interface Use extend. | Interface can extend also with Type

  // -----------------

  // We know; In JS Objcet is an object | array & finction also -> Type of Object;
  // 👉 3️⃣ for that we'll can use Interface for array & object

  // Array Using Type👇👇👇
  type Roll = number[];
  const role: Roll = [2,8,5];
  
  // Array Using Interface👇👇👇

  interface RollWithInterface{
    [index: number]: number;
    // [arrayIndex: typeOfIndex] : typeOfIndexValue;
  }
  const roleWithinterface = [2,8,29];


  // Function Using Type👇👇👇
  type Add = (num1: number, num2: number) => number;
  const add:Add = (num1, num2) => num1+num2;

  // Finctuin Using Interface👇👇👇

  interface AddUnsingInterface{
  (num1:number, num2: number):number;
  }
  const addUsingInterface:AddUnsingInterface = (num1, num2) => num1+num2;
















  //   Difference Between "Alias Type" & "Interface"👇👇👇

  // 1️⃣ for the primitive data type (number, string etc) will use "Alias Type"
  // 1️⃣ for the object we will use "Interface"

  // -----------------
  // 2️⃣ For extend Type Alias Use Intersection(&)
  // 2️⃣ For extend Interface Use extend. | Interface can extend user also
}
