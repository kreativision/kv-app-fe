import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Home from "../Home/Home";
import Products from "../Products/Products";

function RouterOutlet() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/products" component={Products} />
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default RouterOutlet;
