import * as React from "react";
import styled from "styled-components";

import { DataItemType } from "../type";

interface PassedProps {
  data: DataItemType;
}

interface Props extends PassedProps {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <p>{props.data.name}</p>
      <div>
        <p>{props.data.area}</p>
        <p>{props.data.food}</p>
      </div>
    </div>
  );
};

const StyledComponent = styled(Component)`
  background: aquamarine;
`;

export const Card = StyledComponent;
