import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { createStore } from "redux";
import reducer from "./Reducer/reducer";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/Error";
let store = createStore(reducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  rootElement
);
