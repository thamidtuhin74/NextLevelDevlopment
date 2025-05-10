{
  // generic constaint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type User1HaveVehicle = "bike" | "car" | "ship"; //Menual Integration
  type User2HaveVehicle = keyof Vehicle; //Integration using Keyof operator

  function getPropertyValue<T, Q extends keyof T>(params: T, key: Q) {
    return params[key];
  }
  type User = {
    name: string;
    age: number;
    phone: number;
  };
  const user1: User = {
    name: "tuhin",
    age: 27,
    phone: 8801798905167,
  };
  const res1 = getPropertyValue(user1, "name");
}
