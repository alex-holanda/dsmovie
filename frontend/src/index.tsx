import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { DefaultLayout } from "app/layouts/Default";

import { AppRoutes } from "app";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DefaultLayout>
        <AppRoutes />
      </DefaultLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
