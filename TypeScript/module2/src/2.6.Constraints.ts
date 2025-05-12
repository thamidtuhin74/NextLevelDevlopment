{
  // Constraints
  type Student = {
    id: number;
    name: string;
    email: string;
    phone: number;
  };
  type Course = {
    name: string;
    noOfClass: number;
    duration: string;
    price: number;
    tutorName: string;
    paymentStatus: boolean;
  };
  const student1: Student = {
    id: 1001,
    name: "Student 1",
    email: "srudent1@gmail.com",
    phone: 8801798653245,
  };

  const addACourse = <T extends { id: number; name: string; email: string }>(
    student: T
  ): {} => {
    const course: Course = {
      name: "ICT Hero",
      noOfClass: 30,
      duration: "3 months",
      price: 4500,
      tutorName: "Tahmid Tuhin",
      paymentStatus: true,
    };
    return {
      ...student,
      course,
    };
  };

  const afterAddedCourse = addACourse(student1);
}
