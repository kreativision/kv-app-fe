import React from "react";
import { useLocation } from "react-router-dom";
import GeneralRouter from "./GeneralRouter";
import "./Router.scss";

function Navigation() {
  const params = useLocation();

  return <>{params.pathname.includes("admin") || <GeneralRouter />}</>;
}

export default Navigation;
