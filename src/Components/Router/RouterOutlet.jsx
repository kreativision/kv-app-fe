import React from "react";
import { Route, Switch } from "react-router-dom";
import Authentication from "../Authentication/Authentication";
import Home from "../Home/Home";
import Products from "../Products/Products";

function RouterOutlet() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Authentication} />
        <Route path="/products" component={Products} />
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default RouterOutlet;
