import * as React from "react";
import styled from "styled-components";
import { Link, useLocation, useHistory } from "react-router-dom";
import { DataItemType } from "../type";
import { isValidDataItem } from "../helper/util";

interface PassedProps {}

interface Props extends PassedProps {
  className?: string;
  routerState: DataItemType;
}

const Component: React.FC<Props> = (props) => {
  const { routerState } = props;
  const history = useHistory();

  return (
    <div className={props.className}>
      <div className="title">{routerState.name}</div>
      <div className="infoRow">
        {routerState.area}/{routerState.food}
      </div>
      <Link to="/reducer-cards">戻る(link)</Link>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        戻る(go back)
      </button>
    </div>
  );
};

const StyledComponent = styled(Component)`
  & .title {
    font-size: 18px;
    font-weight: bold;
  }
  & .infoRow {
    font-size: 14px;
    font-weight: bold;
    color: "#555";
  }
`;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  const location = useLocation();
  const routerState = location.state;
  if (!isValidDataItem(routerState)) throw new Error("invalid data");

  return <StyledComponent routerState={routerState}></StyledComponent>;
};

export const ReducerDetail = ContainerComponent;
