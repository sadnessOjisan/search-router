import * as React from "react";
import styled from "styled-components";

import {
  initialState,
  searchReducer,
  actionCreators,
} from "../reducer/searchReducer";

const Component = () => {
  const [reducer, dispatch] = React.useReducer(searchReducer, initialState);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          onChange={(e) => {
            dispatch(actionCreators.selectAreaAction(e.target.value));
          }}
        >
          <option value="f">hoge</option>
          <option value="3">hogea</option>
        </select>
      </form>
      {JSON.stringify(reducer)}
    </div>
  );
};

const StyledComponent = styled(Component)``;

export const UsingReducer = StyledComponent;
