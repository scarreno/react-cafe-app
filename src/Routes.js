import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./componentes/Login/Index";
import Home from './componentes/Home/Index';

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
  </Switch>;