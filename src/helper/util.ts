import {
  AreaType,
  FoodType,
  AreaFormValidType,
  FoodFormValidType,
  DataItemType,
} from "../type";

const areas: AreaType[] = ["東京", "千葉", "横浜"];
const formValidAreas: AreaFormValidType[] = ["東京", "千葉", "横浜", "ALL"];
const foods: FoodType[] = ["カレー", "ラーメン"];
const formValidFoods: FoodFormValidType[] = ["カレー", "ラーメン", "ALL"];

export const isArea = (area: string): area is AreaType => {
  return areas.includes(area as any);
};

export const isFood = (food: string): food is FoodType => {
  return foods.includes(food as any);
};

export const isValidAreaFormInput = (
  area: string
): area is AreaFormValidType => {
  return formValidAreas.includes(area as any);
};

export const isValidFoodFormInput = (
  area: string
): area is FoodFormValidType => {
  return formValidFoods.includes(area as any);
};

export const isValidDataItem = (data: any): data is DataItemType => {
  if (!(data.name && typeof data.name === "string")) {
    return false;
  }
  if (!(data.area && isArea(data.area))) {
    return false;
  }
  if (!(data.food && isFood(data.food))) {
    return false;
  }
  return true;
};
