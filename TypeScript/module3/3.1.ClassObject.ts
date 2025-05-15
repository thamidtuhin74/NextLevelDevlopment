{
  // Class and Object

  class Animal {
    //class 👇👇👇 Generally Decleared
    // name: string; //properties
    // species: string; //properties
    // sound: string; //properties

    // constructor(name: string, species: string, sound: string) {//Constractor
    //   this.name = name;
    //   this.species = species;
    //   this.sound = sound;
    // }

    // Class Using "Paremeter Properties"👇👇👇
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    //👇👇👇 Methods ~~ Function
    makesound() {
      //Don't use Arrow Function here
      console.log(`The ${this.name} sounds ${this.sound}`);
    }
  }

  const dog = new Animal("Desi KuKur", "Bangali", "Ghew Ghew");
  dog.makesound();
  const cat = new Animal("Mini", "Cat", "Meaw Meaw");
  cat.makesound();
}
