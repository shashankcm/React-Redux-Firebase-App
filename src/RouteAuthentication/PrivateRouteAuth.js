import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateAuthRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !!auth.uid ? (
          <Component {...props} />
        ) : auth.isEmpty && auth.isLoaded ? (
          <Redirect to="/signin" />
        ) : null
      }
    />
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(PrivateAuthRoute);
