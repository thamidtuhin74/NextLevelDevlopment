{
  // Instance of Guard ==> also type narrowing

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I'm makking sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I'm Barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log("I'm Meawing");
    }
  }

  const animal = new Animal("Animal", "Animal");
  const dog = new Dog("Tomy", "Dog");
  const cat = new Cat("Mini", "Cat");
  //   dog.makeBark();

  //   Type Guard

  //   Smart Way👇👇
  const isDog = (animal: Animal): animal is Dog => {
    //Type of Bollean 👉 animal is Dog
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    //Type of Bollean 👉 animal is Cat
    return animal instanceof Cat;
  };
  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  //   //   Normal Way👇👇
  //   const getAnimal = (animal: Animal) => {
  //     if (animal instanceof Dog) {
  //       animal.makeBark();
  //     } else if (animal instanceof Cat) {
  //       animal.makeMeaw();
  //     } else {
  //       animal.makeSound();
  //     }
  //   };

  getAnimal(dog);
}
