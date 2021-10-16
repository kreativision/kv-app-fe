import React from "react";
import "./Auth.scss";
import Login from "./Login";

function Auth() {
  return (
    <div className="auth-layout px-2 d-flex justify-content-center">
      <div className="container">
        <div className="bg-light mt-4 p-3 shadow auth-tile">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Auth;
