import React from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "../containers/dashboard";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={() => "login"} />
        <Route path="/signup" component={() => "signup"} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
