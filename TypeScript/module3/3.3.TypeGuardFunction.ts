{
  // Type Guard => also type narrowing
  // We know: 👉👉typeof --> work on the RUN time;

  // 1️⃣ typeof as Type Guard👇👇👇
  type AlphaNeumeric = string | number;
  const add = (param1: AlphaNeumeric, param2: AlphaNeumeric): AlphaNeumeric => {
    if (typeof param1 === "number" && typeof param2 === "number")
      return param1 + param2;
    else {
      return param1.toString() + param2.toString();
    }
  };
  console.log(add(2, "5"));

  // 2️⃣ In Guard👇👇👇

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: string;
  };
  const getUser = (user: NormalUser | AdminUser) => {
    // console.log(user.)
    if ("role" in user) {
      console.log(`My name is ${user.name} & role is "${user.role}"`);
    } else {
      console.log(`My name is ${user.name} & role is not available`);
    }
  };
  const user1: NormalUser = {
    name: "Tuhin",
  };
  const user2: AdminUser = {
    name: "CEO Tuhin",
    role: "Author",
  };
  getUser(user2);
}
