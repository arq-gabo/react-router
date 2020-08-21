import React from "react";
import { hydrate } from "react-dom";
import App from "../pages/containers/app.js";

import { BrowserRouter } from "react-router-dom";

const homeContainer = document.getElementById("home-container");

//render ()
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  homeContainer
);
