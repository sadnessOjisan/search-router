import { AreaFormValidType, FoodFormValidType } from "../type";

const SELECT_AREA = "SELECT_AREA";
const SELECT_FOOD = "SELECT_FOOD";

export const actionTypes = {
  SELECT_AREA,
  SELECT_FOOD,
} as const;

export type StoreType = {
  selectedArea: AreaFormValidType;
  selectedFood: FoodFormValidType;
};

export const initialState: StoreType = {
  selectedArea: "ALL",
  selectedFood: "ALL",
};

const selectAreaAction = (area: AreaFormValidType) => {
  return {
    type: actionTypes.SELECT_AREA,
    payload: area,
  };
};

const selectFoodAction = (food: FoodFormValidType) => {
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
