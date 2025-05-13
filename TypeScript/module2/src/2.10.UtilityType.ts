{
  // Utility Types 👉 : 1.Pick  2. Omit 3. Require 4. Partial 5. ReadOnly 6. Record

  type Person = {
    name: string;
    age: number;
    emial?: string;
    contactNo: number;
  };

  // Pick Utilty👇
  type NameAgeOfPerson = Pick<Person, "name" | "age">; //Pick<T, K extends keyof T> , Add Name & Age
  // OUTPUT: type NameAgeOfPerson = {name: string; age: number;}

  // Omit Utility👇
  type Contactinfo = Omit<Person, "name" | "age">; //Removing name & age
  //   OUTPUT: type Contactinfo = { emial?: string | undefined; contactNo: string;}

  //   Require Utility👇
  type RequireUtility = Required<Person>; // make Require all the keys of the type
  //   OUTPUT: type RequireUtility = {name: string;age: number;emial: string;contactNo: string;}

  //   Partial utility👇
  type PartialUtility = Partial<Person>; //make partial all the keys of the type
  //   OUTPUT: type PartialUtility = {name?: string | undefined;age?: number | undefined;emial?: string | undefined;contactNo?: string | undefined;}

  const person1: Person = {
    name: "Tuhin",
    age: 25,
    emial: "tuhin@gmail.com",
    contactNo: 8801798905167,
  };

  person1.age = 26; //Can Write or change;
  console.log(person1.age);

  //   Read only👇
  type ReadOnlyPerson = Readonly<Person>;
  const person2: ReadOnlyPerson = {
    name: "Tahmid",
    age: 25,
    emial: "Tahmid@gmail.com",
    contactNo: 8801798905167,
  };
  // person2.age = 1; //Can't Write or change;

  // Record Type👇 : USE for make  dynamic Object

  // type MyObj = {
  //   a: string;
  //   b: string;
  // };
  type MyObj = Record<string, unknown>;
  const myObj1: MyObj = {
    name: "Tahmid",
    age: 27,
    user: false,
    email: "tahmid@gmail.com",
  };

  //
}
