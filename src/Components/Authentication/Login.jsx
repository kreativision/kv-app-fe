import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { axiosInstance } from "../../Config/axiosConfig";
import "./Auth.scss";

function Login() {
  const [state, setState] = useState();
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email!")
        .required("Email is required."),
      password: Yup.string().required("Password is required."),
    }),
    onSubmit: async (values) => {
      const response = await axiosInstance.post("/users/login", values);
      if (response) {
        const { status, data } = response;
        if (status === 400) setState("Note Registered");
        setState(data);
        localStorage.setItem("token", `Bearer ${data.response.token}`);
      }
    },
  });

  return (
    <div className="auth-layout px-2 d-flex justify-content-center">
      <div className="container px-1">
        <div className="bg-light mt-4 p-3 shadow auth-tile">
          <h3 className="text-dark m-0">
            <FontAwesomeIcon icon="lock" className="mr-3" />
            <span>Login to your account...</span>
          </h3>

          <form onSubmit={loginForm.handleSubmit} className="mt-3">
            <div
              className={`form-group ${
                loginForm.errors.email ? "has-danger" : ""
              }`}
            >
              <input
                type="text"
                className={`form-control form-control-sm bg-transparent ${
                  loginForm.touched.email && loginForm.errors.email
                    ? "form-control-danger is-invalid"
                    : ""
                }`}
                autoFocus
                autoComplete="off"
                placeholder="Registered E-mail"
                name="email"
                value={loginForm.values.email}
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
              />
              {loginForm.touched.email && loginForm.errors.email && (
                <div className="invalid-feedback mt-1 mb-3">
                  <FontAwesomeIcon icon="exclamation" className="mx-1" />
                  {loginForm.errors.email}
                </div>
              )}
            </div>
            <div
              className={`form-group ${
                loginForm.touched.password && loginForm.errors.password
                  ? "has-danger"
                  : ""
              }`}
            >
              <input
                type="password"
                className={`form-control form-control-sm bg-transparent ${
                  loginForm.touched.password && loginForm.errors.password
                    ? "form-control-danger is-invalid"
                    : ""
                }`}
                autoComplete="off"
                placeholder="Password"
                name="password"
                value={loginForm.values.password}
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
              />
              {loginForm.touched.password && loginForm.errors.password && (
                <div className="invalid-feedback mt-1 mb-3">
                  <FontAwesomeIcon icon="exclamation" className="mx-1" />
                  {loginForm.errors.password}
                </div>
              )}
            </div>
            <div className="d-flex justify-content-between">
              <NavLink
                to="/register"
                type="button"
                className="btn btn-link btn-info pl-0"
              >
                <span className="text-dark">New here?</span> Sign Up!
              </NavLink>
              <button
                type="submit"
                className="btn btn-sm btn-success shadow-sm"
              >
                Login
              </button>
            </div>
          </form>
          <p>{JSON.stringify(state)}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
