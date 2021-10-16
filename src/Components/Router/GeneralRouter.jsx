import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function GeneralRouter() {
  const [scrollAtTop, setScrollAtTop] = useState(true);
  const scrollHandler = function () {
    if (window.scrollY >= 250) setScrollAtTop(false);
    else setScrollAtTop(true);
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top text-uppercase custom-nav ${
          scrollAtTop
            ? "navbar-transparent at-top"
            : "navbar-light scrolled-down shadow"
        }`}
      >
        <div className="container py-2 px-3">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
          <NavLink to="/" className="navbar-brand py-1">
            Kreativision Photoarts
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className="nav-link"
                  activeClassName="active"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link"
                  activeClassName="active"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  rel="noreferrer"
                  href="https://demos.creative-tim.com/paper-kit-2/docs/1.0/getting-started/introduction.html"
                  target="_blank"
                >
                  UI KIT Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default GeneralRouter;
