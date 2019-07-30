import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import "./index.css";
import "./sass/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import 'swiper/dist/css/swiper.min.css'

import Reducer from "./reducers";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
let store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
