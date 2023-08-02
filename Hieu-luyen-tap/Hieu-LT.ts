interface Food {
  name: string;
  calories: number;
}

let favoriteFood: Food = {
  name: "banana",
  calories: 1,
};

let foodArray: Food[] = [
  {
    name: "sandwich",
    calories: 130,
  },
  {
    name: "hamburger",
    calories: 120,
  },
];
function layCaloCacMonAn(foodArray: Food[]): number[] {
  return foodArray.map((Food) => Food.calories);
}
const layCalo: number[] = layCaloCacMonAn(foodArray);
console.log("lượng calo các món ăn:", layCalo);
