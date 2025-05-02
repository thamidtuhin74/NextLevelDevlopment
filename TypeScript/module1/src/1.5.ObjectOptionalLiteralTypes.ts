// Refference Type DataType --> OBJECT

const user: {
  firstName: string;
  lastName: string;
  middleName?: string; // Optional type
  readonly dateOfBirth: string; //Fix a data type using access modifier
  companyName: "Creative Studio BD"; // Literal Type
  designation: string;
  isMarried: boolean;
} = {
  firstName: "Tahmid",
  lastName: "Tuhin",
  dateOfBirth: "15/11/1998",
  designation: "Web Developer",
  companyName: "Creative Studio BD",
  isMarried: true,
};
