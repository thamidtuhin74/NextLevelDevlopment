{
  // Conditional Types 👉 If there any type which depends on another type based on a condition is called Conditional type.

  type A = null;
  type B = undefined;

  type X = A extends null ? true : false; //Conditional Type
  type Y = A extends number ? true : B extends undefined ? undefined : any; //Conditional Type

  //   Another Example👇
  type RonaldoVehicle = {
    car: string;
    bike: string;
    ship: string;
    plane: string;
  };

  type CheckVehicle<T> = T extends keyof RonaldoVehicle ? true : false; //Generic  Type

  type haveCar = CheckVehicle<"car">; //Conditional Type
  type haveRickshaw = CheckVehicle<"rickshaw">; //Conditional Type

  //
}
