{
  // Ternary operator || optional Chaining || nullish coalescing operator

  //   Ternary Operator👇👇👇
  const age: number = 17;
  const isAdult = age >= 18 ? "adult" : "Not adult";
  console.log(isAdult);

  //   nullish coalescing operator👇👇👇
  //   when data will come null/undefine then we can use a default value using this
  const isAuthenticated = null;
  const result = isAuthenticated ?? "Guest";
  console.log({ result });

  //   Example:👇👇👇

  type user = {
    name: string;
    email?: string;
    age: number;
    maritalStaur: boolean;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user1: user = {
    name: "Tahmid Tuhin",
    email: "thamidtuhin74@gmail.com",
    age: 27,
    maritalStaur: true,
    address: {
      city: "Rangpur",
      road: "03/1 kakina road",
      presentAddress: "GL-roy road , Rangpur",
    },
  };

  const permanentAddress = user1?.address?.permanentAddress ?? "Not Available"; //optional chaining & Nullishing operator
  console.log(`Permanent address : ${permanentAddress}`);
  console.log(`${user1.name} is ${user1.maritalStaur ? "Married" : "Single"}`); //Ternary Operator
}
