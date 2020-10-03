import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UsingReducer } from "./reducer";
import { ReducerDetail } from "./reducerDetail";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/reducer-cards" component={UsingReducer}></Route>
        <Route
          exact
          path="/reducer-cards/:id"
          component={ReducerDetail}
        ></Route>
        <Route path="/users" component={() => <div>users</div>}></Route>
        <Route path="/" component={() => <div>/</div>}></Route>
      </Switch>
    </Router>
  );
};
