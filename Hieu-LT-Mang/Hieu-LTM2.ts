interface animal {
  name: string;
  weight: number;
}
let animalArray: animal[] = [
  { name: "cat", weight: 4 },
  { name: "dog", weight: 12 },
  { name: "dog", weight: 13 },
  { name: "dog", weight: 15 },
  { name: "dog", weight: 20 },
];
function inCanNang(animalArray: animal[]): number[] {
  return animalArray.map((animal) => animal.weight);
}
console.log("Cân:", inCanNang(animalArray));

function canNangDuoi20Kg(animalArray: animal[]): animal[] {
  return animalArray.filter((animal) => animal.weight <= 19);
}
console.log("Dưới 20kg:", canNangDuoi20Kg(animalArray));
