{
  // Mapped Types -> Used to change the string value type;
  //   example 1👇
  type Area = {
    height: number;
    width: number;
  };

  type AreaString = {
    //Mapped Type
    [key in keyof Area]: string;
  }; //Output 👇 : type AreaString = {height: string; width: string;}

  //✅ In there(Example 1👆) each & every key type will be SVGMaskElement.
  //❓ IF we want to change each key value Independently Then👉 we need to USE generic FORM

  type height = Area["height"]; // Look up Type

  //   Mapped type in Generic Form👇

  type ChangeAreaKeyType<T> = {
    [index in keyof T]: T[index]; //T[index] -> LookUP type
  };

  const areaAny: ChangeAreaKeyType<{ height: string; width: number }> = {
    //we need to USE generic in Mapped Type
    height: "50",
    width: 50,
  }; //Output 👉 const areaAny: ChangeAreaKeyType<{ height: string; width: number;}>

  //
}
