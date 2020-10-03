import * as React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

interface PassedProps {}

interface Props extends PassedProps {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const location = useLocation();
  const urlState = location.state;
  return (
    <div className={props.className}>hello{JSON.stringify(location.state)}</div>
  );
};

const StyledComponent = styled(Component)`
  & .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    & > div {
      margin: 12px;
    }
  }
`;

export const ReducerDetail = StyledComponent;
