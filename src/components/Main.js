import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import LoggedIn from "./LoggedIn"
import Info from './Info'
// import Factory from "./Factory";
// import Rosie from "./Rosie";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/LoggedIn" component={LoggedIn} />
    <Route path="/Info" component={Info} /> 
  </Switch>
);

export default Main;