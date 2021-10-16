import React from "react";
import { Route, Switch } from "react-router-dom";
// import Register from "../Authentication/Register";
import Auth from "../Authentication/Auth";
import Home from "../Home/Home";
import Products from "../Products/Products";

function RouterOutlet() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/products" component={Products} />
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default RouterOutlet;
