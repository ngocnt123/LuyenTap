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

const getThe: string[] = getTheHeightOfEx(exArray);
console.log("Get The Height Of Ex", getThe);
console.log("Get The Gender Of Ex", getGenderOfEx(exArray));
