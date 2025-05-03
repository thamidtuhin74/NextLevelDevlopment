{
  // Interface

  type UserType = {
    name: string;
    age: number;
  };
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

  //   Difference Between "Alias Type" & "Interface"👇👇👇

  // 1️⃣ for the primitive data type (number, string etc) will use "Alias Type"
  // 2️⃣ for the object we will use "Interface"
}
