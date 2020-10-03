import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UsingReducer } from "./reducer";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={UsingReducer}></Route>
        <Route path="/users" component={() => <div>users</div>}></Route>
        <Route path="/" component={() => <div>/</div>}></Route>
      </Switch>
    </Router>
  );
};
