import { AreaType, FoodType } from "../type";

const areas: AreaType[] = ["東京", "千葉", "横浜"];
const foods: FoodType[] = ["カレー", "ラーメン"];

export const isArea = (area: string): area is AreaType => {
  return areas.includes(area as any);
};

export const isFood = (food: string): food is FoodType => {
  return foods.includes(food as any);
};
