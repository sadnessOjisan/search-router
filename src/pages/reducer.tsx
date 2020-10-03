import * as React from "react";
import styled from "styled-components";

import {
  initialState,
  searchReducer,
  actionCreators,
} from "../reducer/searchReducer";

import { isValidAreaFormInput, isValidFoodFormInput } from "../helper/util";
import { data } from "../helper/data";

const Component = () => {
  const [state, dispatch] = React.useReducer(searchReducer, initialState);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>area</label>
        <select
          value={state.selectedArea}
          onChange={(e) => {
            const input = e.target.value;
            // TODO: error catch するコンポーネント欲しいな
            if (!isValidAreaFormInput(input))
              throw new Error("unexpected value");
            dispatch(actionCreators.selectAreaAction(input));
          }}
        >
          <option value="ALL">全て</option>
          <option value="東京">東京</option>
          <option value="千葉">千葉</option>
          <option value="横浜">横浜</option>
        </select>

        <label>food</label>
        <select
          value={state.selectedFood}
          onChange={(e) => {
            const input = e.target.value;
            // TODO: error catch するコンポーネント欲しいな
            if (!isValidFoodFormInput(input))
              throw new Error("unexpected value");
            dispatch(actionCreators.selectFoodAction(input));
          }}
        >
          <option value="ALL">全て</option>
          <option value="カレー">カレー</option>
          <option value="ラーメン">ラーメン</option>
        </select>
      </form>
      <div>
        {data
          .filter(
            (d) =>
              (state.selectedArea === "ALL"
                ? true
                : d.area === state.selectedArea) &&
              (state.selectedFood === "ALL"
                ? true
                : d.food === state.selectedFood)
          )
          .map((d) => (
            <div>
              {d.area}
              {d.food}
            </div>
          ))}
      </div>
      {JSON.stringify(state)}
    </div>
  );
};

const StyledComponent = styled(Component)``;

export const UsingReducer = StyledComponent;
