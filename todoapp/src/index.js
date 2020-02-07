import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Reducers from "./reducers";

import App from "./components/App";

ReactDOM.render(
  <Provider store={createStore(Reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
