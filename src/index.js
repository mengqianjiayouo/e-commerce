import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import "./sass/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/dist/css/swiper.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Reducer from "./reducers";

import Root from "./Routers";
import * as serviceWorker from "./serviceWorker";
const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["platId"]
};
const persistedReducer = persistReducer(persistConfig, Reducer);
let store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
