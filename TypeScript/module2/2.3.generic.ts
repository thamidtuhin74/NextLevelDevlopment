{
    // generic Type

    type GenericArray = Array<number>;//Statc Generic Type Array

    // const rollNumber: number[] = [25,45,65,8,5];//👉Array
    const rollNumber: GenericArray = [25,45,65,8,5];//👉Generic Type Number Array
    const names: Array<string> = ["hi","hello"];//👉👉Generic Type String Array

    // Lets make a Dynamic Generic type Arro👇👇👇

    type DynamicGenericArray<T> = Array<T>;
    const rollNumber1 : DynamicGenericArray<number> = [5,8,5,68];
    const mentors: DynamicGenericArray<string> = ["ht0","ere"];

    type user = {
        name: string;
        phone: number;
        city: string;
    }
    const users: DynamicGenericArray<user> = [{
        name: "Tahmid",
        phone: 323,
        city: "rangpur"
    },{
        name: "Tuhin",
        phone: 223,
        city: "Dhaka"
    }]
    const users2: DynamicGenericArray<{name: string, phone: number}> = [{
        name: "Tahmid",
        phone: 323,
    },{
        name: "Tuhin",
        phone: 223,
    }]


    // generic Tuple

    type GenericTouple<x,y> = [x,y]

    // const couple: [string, string] = ['Mr. x','Mrs. Y'];
    const couple: GenericTouple<string, string> = ['Mr. x','Mrs. Y'];
    const time:GenericTouple<number, number> = [8,25];
    const userWithTouple: GenericTouple<number,{name:string, phone:number}> =[1001,{
        name: "Tahmid Tuhin",
        phone: 8801798905167,
    }]
}