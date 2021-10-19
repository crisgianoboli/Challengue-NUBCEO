import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthRouter from "./routes/AuthRouter";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
