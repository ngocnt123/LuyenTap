interface Food {
  name: string;
  calories: number;
}

let favoriteFood: Food = {
  name: "banana",
  calories: 110,
};

let foodArray: Food[] = [
  {
    name: "sandwich",
    calories: 120,
  },
  {
    name: "hamburger",
    calories: 130,
  },
  {
    name: "pizza",
    calories: 140,
  },
];
function layCaloCacMonAn(foodArray: Food[]): number[] {
  return foodArray.map((Food) => Food.calories);
}
function layCaloDuoi140(foodArray: Food[]): Food[] {
  return foodArray.filter((Food) => Food.calories < 140);
}
function tongLuongCalo(Food: Food[]): number {
  return foodArray.reduce((total, food) => total + food.calories, 0);
}
console.log("Món ăn yêu thích:", favoriteFood);
//const layCalo: number[] = layCaloCacMonAn(foodArray);
//console.log("lượng calo các món ăn:", layCalo);
console.log("Lượng calo các món ăn:", layCaloCacMonAn(foodArray));
//const caloDuoi140: Food[] = layCaloDuoi140(foodArray);
console.log("Calo dưới 140:", layCaloDuoi140(foodArray));
console.log("Tổng lượng calo:", tongLuongCalo(foodArray));
