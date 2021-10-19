import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Signup from "../components/Signup";
import { AuthProvider } from "../contexts/AuthContext";
import AppRoute from "./AppRoute";
import Login from "../components/Login";
import PrivateRoute from "../routes/PrivateRoute";
import ForgotPassword from "../components/ForgotPassword";
import UpdateProfile from "../components/UpdateProfile";

function AuthRouter() {
  return (
    <Container>
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgot-password" component={ForgotPassword} />

              <PrivateRoute exact path="/" component={AppRoute} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default AuthRouter;
