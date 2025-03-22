import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppleProductContext from "./context/AppleProductContext";
import AppleAuthContext from "./context/AppleAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppleProductContext>
      <AppleAuthContext>
        <App />
      </AppleAuthContext>
    </AppleProductContext>
  </BrowserRouter>
);
