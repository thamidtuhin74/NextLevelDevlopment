{
  //use to define a scope to the typescript
  //   Desturcturing 👇👇👇

  //   --> Object Desturcturing👇👇
  const user = {
    id: 1001,
    name: {
      firstName: "Tahmid",
      middlename: "",
      lastName: "Tuhin",
    },
    contact: "01754555682",
    address: "Rangpur",
  };
  const {
    contact,
    name: { lastName: nickNme }, //Name Alias
  } = user;

  //   --> Array Desturcturing👇👇

  const myFriends: string[] = ["a", "b", "M", "S", "d", "e", "f"];
  const [, , bestFriend1, bestFreiend2, ...goodFriend] = myFriends;
}
