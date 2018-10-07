import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./logic/store";

import "./reset.css";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./components/app";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
