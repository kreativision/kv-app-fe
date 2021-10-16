import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  return (
    <>
      <h3 className="text-dark m-0">
        <FontAwesomeIcon icon="lock" className="mr-3" />
        <span>Login to your account...</span>
      </h3>
      <form className="mt-4">
        <div className="form-group">
          <input
            type="text"
            className="form-control bg-transparent"
            name="email"
            placeholder="Registered E-mail"
          />
        </div>
      </form>
    </>
  );
}

export default Login;
