import React from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../containers/dashboard";
const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/login" component={() => "login"} />
          <Route path="/signup" component={() => "signup"} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
