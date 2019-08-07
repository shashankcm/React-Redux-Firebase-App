import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PubliAccessRoutes = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.uid ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(PubliAccessRoutes);
