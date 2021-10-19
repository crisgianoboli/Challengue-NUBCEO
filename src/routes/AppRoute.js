import React from "react";
import Home from "../pages/Home/Home";
import NavBar from "../components/NavBar/NavBar";
import AppState from "../contexts/AppContext/AppState";

function AppRoute() {
  /* const history = useHistory(); */

  return (
    <AppState>
      <NavBar />
      <Home />
    </AppState>
  );
}

export default AppRoute;
