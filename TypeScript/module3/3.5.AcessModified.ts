{
  // defaultly all of them are 👉Public
  // 👉readonly , 👉private , 👉Public readonly, 👉protected

  //   👉👉👉 There is a convention for use PRIVATE property like that👇👇👇
  //   👉👉👉👉 User Underscore for the Private Properties. Examples: 👇
  class Animal {
    private _id: number;
    name: string;
    species: string;

    constructor(_id: number, name: string, species: string) {
      this._id = _id;
      this.name = name;
      this.species = species;
    }
  }
}

// 👉protected vs Protected???👇👇👇

// 1. private properrties can't be access from the outside of the class as a property & can't extend  to the child ;
// 1. Protected propertis can't acess from the outside of the class but can extend with the child;
