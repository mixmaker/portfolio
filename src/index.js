import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Globalstyles from "./components/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Globalstyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
