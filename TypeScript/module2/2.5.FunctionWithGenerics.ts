{
  // Function with Generic

  //   Array with Function👇👇👇
  const createArray = (params: string) => {
    return [params];
  };
  const res1 = createArray("Tuhin");

  //   Array with Generic Function👇👇👇
  const createArraywWithGeneric = <T>(params: T): T[] => {
    return [params];
  };
  const resWithGeneric1 = createArraywWithGeneric<string>("Tuhin");
  const resWithGeneric2 = createArraywWithGeneric<number>(1);
  type User = {
    name: string;
    phone: number;
  };
  const resWithGeneric3 = createArraywWithGeneric<User>({
    name: "tahmidtuhin",
    phone: 1254685546,
  });

  //   Touple with Generic Function👇👇👇

  const createToupleWithGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const toupleWithGeneric = createToupleWithGeneric<number, User>(1001, {
    name: "Boss",
    phone: 59825441,
  });
  type Course = {
    name: string;
    noOfClass: number;
    duration: string;
    price: number;
    tutorName: string;
    paymentStatus: boolean;
  };

  //   Practice: Add a course to user👇👇👇
  const addCourseToUser = <T>(params: T): {} => {
    const course: Course = {
      name: "ICT Hero",
      noOfClass: 30,
      duration: "3 months",
      price: 4500,
      tutorName: "Tahmid Tuhin",
      paymentStatus: true,
    };

    return {
      ...params,
      course,
    };
  };

  const resAfterAddingCourse = addCourseToUser<User>({
    name: "Student1",
    phone: 8801789895623,
  });
}
