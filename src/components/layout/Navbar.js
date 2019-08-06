import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SingedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper gray darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Project Planner
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Navbar);
