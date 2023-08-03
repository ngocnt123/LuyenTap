interface Ex {
  name: string;
  age: number;
  height: string;
  gender: boolean;
}

let exArray: Ex[] = [
  { name: "Tom", age: 20, height: "1m9", gender: true },
  {
    name: "Jerry",
    age: 15,
    height: "1m2",
    gender: true,
  },
  {
    name: "Donal",
    age: 25,
    height: "1m75",
    gender: true,
  },
  {
    name: "pink Panther",
    age: 35,
    height: "1m83",
    gender: false,
  },
];
function getTheHeightOfEx(exArray: Ex[]): string[] {
  return exArray.map((Ex) => Ex.height);
}

function getGenderOfEx(exArray: Ex[]): string[] {
  return exArray.map((ex) => {
    if (ex.gender) return "Boy";
    else return "Girl";
  });
}

function getNameOfEx(exArray: Ex[]): string[] {
  return exArray.map((Ex) => Ex.name);
}

function filterExUnderOrEqualTo20YearsOld(exArray: Ex[]): Ex[] {
  return exArray.filter((Ex) => Ex.age <= 20);
}
function calculateTheTotalAgeOfTheEx(Ex: Ex[]): number {
  return exArray.reduce((total, exArray) => total + exArray.age, 0);
}

const getThe: string[] = getNameOfEx(exArray);
console.log("Get The Name Of Ex", getThe);
console.log("Get The Gender Of Ex", getGenderOfEx(exArray));
console.log(
  "Filter Ex Under Or Equal To 20 Years Old",
  filterExUnderOrEqualTo20YearsOld(exArray)
);
console.log(
  "Calculate The Total Age Of The Ex",
  calculateTheTotalAgeOfTheEx(exArray)
);
