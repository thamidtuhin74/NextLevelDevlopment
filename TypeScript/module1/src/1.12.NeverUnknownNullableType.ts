{
  // NUllable Types👇👇👇
  const searchString = (var1: string | null) => {
    var1
      ? `${console.log("Searching")}`
      : `${console.log("nothing to serach")}`;
  };
  searchString(null);

  //   Unknown Type👇👇👇
  const getPercentageOf80 = (value: unknown) => {
    if (typeof value === "number") {
      const inPercentage: number = (value / 80) * 100;
      console.log(`The Percentage of ${value} in 80 is = ${inPercentage}%.`);
    } else {
      console.log("Put a number please : ");
    }
  };
  getPercentageOf80(20);

  const getSpeedInMeterPerSec = (value: unknown) => {
    if (typeof value === "number") {
      const inMeterPerSec = value / 1000;
      console.log(`Speed in Meter Per Second ${inMeterPerSec}`);
    } else if (typeof value === "string") {
      const [speed, unit] = value.split(" ");
      if (unit == "kmh^-1" || "Kmh^-1") {
        const inMeterPerSec = parseFloat(speed) / 1000;
        console.log(`${value} in Meter Per Second ${inMeterPerSec}`);
      } else if (unit == "ms^-1") {
        console.log(`Your Given Speed in in ms^-1; Please put speed in Kmh^-1`);
      } else {
        console.log(`Please put speed in Kmh^-1`);
      }
    }
  };
  getSpeedInMeterPerSec("50 Kmh^-1");

  {
    // Never type 👇👇👇

    const throwError = (errorSMS: string): never => {
      throw new Error(errorSMS);
    };

    throwError("Vai error asce");
  }
}
