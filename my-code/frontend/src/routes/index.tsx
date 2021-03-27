import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/m/:id" component={Movie} />
    </Switch>
  );
};

export default Routes;
