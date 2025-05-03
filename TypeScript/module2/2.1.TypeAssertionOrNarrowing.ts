{
  // Type Assertion -> If undestand 'types' better than typescript;

  let anything: any;
  anything = "Tahmid Tuhin";
  anything = 222;
  //   (anything as number). // type assertion

  //   example1:👇👇👇
  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value);
      return `Converted Gram is  =  ${convertedValue * 1000}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgToGm(5000) as number; //type assertion
  const result2 = kgToGm("5000") as string; //type assertion

  //   example1:👇👇👇

  type ErrorSMS = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as ErrorSMS).message); //Type Assertion
  }
}
