import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); // a redux store

ReactDOM.render(
  // provider tag is a react components that knows how to reads changes
  // from a redux store any time the redux gets some new state poduced
  // provider will inform all it's children components
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
