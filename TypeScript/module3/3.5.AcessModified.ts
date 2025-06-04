{
  // defaultly all of them are 👉Public
  // 👉readonly , 👉private , 👉Public readonly

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
