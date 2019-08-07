import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

import PrivateAccessRoute from "./RouteAuthentication/PrivateRouteAuth";
import PubliAccessRoute from "./RouteAuthentication/PublicRouteAuth";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <PrivateAccessRoute exact path="/" component={Dashboard} />
            <PrivateAccessRoute
              path="/project/:id"
              component={ProjectDetails}
            />
            <PubliAccessRoute path="/signin" component={SignIn} />
            <PubliAccessRoute path="/signup" component={SignUp} />
            <PrivateAccessRoute path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
