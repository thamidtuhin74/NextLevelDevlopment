// Basic Daa types;

// string

let firstNama = "hhjksjgh"; //Implicit data type ~ when compiler detect the data type;

let firstName: string = "Tahmid"; //Explicit data type ~ when we assign the data-type
let lastName: string = "Tuhin";

// number
let roll: number = 1511;

// Boolean
let isAdmin: boolean = true;

// Undefined
let x: undefined = undefined;

// null
let y: null = null;

let d; //typescript will infer it as a 'any type'

// Non-Primitive Data-types 👇👇

// Array;

let friends: string[] = ["adam", "smith"];
let salarys: number[] = [15000, 20000];
let eligibleRollList: number[] = [5, 6];

// Tuple --> Type of Array -->

let coOrdinate: [number, number] = [1, 5];
let ageName: [string, number] = ["Tuhin", 27];
