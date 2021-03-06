// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Redux
import store from "./store/index.js";

// Components
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// CSS
import "./index.css";
import "./css/App.css";
import "./css/Uikit.css";
import "./css/Registration.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
