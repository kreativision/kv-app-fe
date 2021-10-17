import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Auth.scss";

function Register() {
  return (
    <div className="auth-layout px-2 d-flex justify-content-center">
      <div className="container">
        <div className="bg-light mt-4 p-3 shadow auth-tile">
          <h3 className="text-dark m-0">
            <FontAwesomeIcon icon="user" className="mr-3" />
            <span>Register New Account...</span>
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
        </div>
      </div>
    </div>
  );
}

export default Register;
