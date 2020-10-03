export type AreaType = "東京" | "横浜" | "千葉";
export type FoodType = "カレー" | "ラーメン";
export type AreaFormValidType = AreaType | "ALL";
export type FoodFormValidType = FoodType | "ALL";

export type DataItemType = { area: AreaType; food: FoodType; name: string };
export type DataType = DataItemType[];
