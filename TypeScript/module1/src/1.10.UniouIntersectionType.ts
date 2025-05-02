{
  // Unioun & InterSection Type 👇👇👇

  {
    //   Union Type
    type FrontendDev = "Fakibaz Developer" | "Junior Frontend Developer";
    type FullStackDeveloper =
      | "Fakibaz Developer"
      | "Frontend Develeper"
      | "Expert Developer";

    type Develeper = FrontendDev | FullStackDeveloper;

    const newDeveloper: FrontendDev = "Junior Frontend Developer";

    type BloodGroup = "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  }
  {
    // Intersection👇👇👇
    type FrontendDeveloper = {
      skill: string[];
      designation1: "Frontend Developer";
    };
    type BackendDeveloper = {
      skill: string[];
      designation2: "Backend Developer";
    };

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullStackDeveloper: FullStackDeveloper = {
      skill: ["HTML", "CSS", "JS", "React", "TypeScript", "Express", "mongoDB"],
      designation1: "Frontend Developer",
      designation2: "Backend Developer",
    };
  }

  type User = {
    name: string;
    email?: string;
    gender: "Male" | "Female" | "Others";
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  };

  const user1: User = {
    name: "Tahmid Tuhin",
    email: "thamidtuhin74@gmail.com",
    gender: "Male",
    bloodGroup: "B+",
  };
}
