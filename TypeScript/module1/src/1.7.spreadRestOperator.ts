{
  //using for make a block to TypeScript
  // Spread Operator
  const bros1: string[] = ["x", "y", "z"];
  const bros2: string[] = ["a", "b", "c"];

  // Lets marge these 2 Array;
  // bros1.push(bros2); --> This is a wrong way
  bros1.push(...bros2); //marge it using spread operator

  //   Sperad operatior In a Objcet👇👇
  const mentor1 = {
    C: "Subin",
    dataStucture: "Umor Faruk",
    algorithm: "Abdul Bari",
  };
  const mentor2 = {
    digitalElectronics: "Arafat",
    dataStructure: "Tuhin",
  };

  const allMentors = {
    ...mentor1,
    ...mentor2,
  };

  //   Rest operatior 👇👇

  //   Unlimited Parameter in a function using REST Operator
  const greetingFriends = (...friendsParameter: string[]) => {
    friendsParameter.forEach((friend: String) =>
      console.log(`Hi my dear ${friend}`)
    );
  };
  greetingFriends("x", "y", "z");
}
