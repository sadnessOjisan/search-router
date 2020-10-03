import { AreaType, FoodType } from "../type";

const SELECT_AREA = "SELECT_AREA";
const SELECT_FOOD = "SELECT_FOOD";

export const actionTypes = {
  SELECT_AREA,
  SELECT_FOOD,
} as const;

export type StoreType = {
  selectedArea: AreaType;
  selectedFood: FoodType;
};

export const initialState: StoreType = {
  selectedArea: "東京",
  selectedFood: "カレー",
};

const selectAreaAction = (area: AreaType) => {
  return {
    type: actionTypes.SELECT_AREA,
    payload: area,
  };
};

const selectFoodAction = (food: FoodType) => {
  return {
    type: actionTypes.SELECT_FOOD,
    payload: food,
  };
};

export const actionCreators = {
  selectAreaAction,
  selectFoodAction,
};

export type SearchActionType = ReturnType<
  typeof selectAreaAction | typeof selectFoodAction
>;

export const searchReducer = (
  state = initialState,
  action: SearchActionType
): StoreType => {
  switch (action.type) {
    case actionTypes.SELECT_AREA:
      return {
        ...state,
        selectedArea: action.payload,
      };
    case actionTypes.SELECT_FOOD:
      return {
        ...state,
        selectedFood: action.payload,
      };
    default:
      return state;
  }
};
