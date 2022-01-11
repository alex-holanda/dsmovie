import React from "react";
import ReactDOM from "react-dom";

import { HomeView } from "./app/views";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <HomeView />
  </React.StrictMode>,
  document.getElementById("root")
);
