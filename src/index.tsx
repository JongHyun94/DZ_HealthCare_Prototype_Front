import React from "react";
import ReactDOM from "react-dom";
import "./css/App.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
