import React from "react";
import App from "./src/App";
import { Provider } from "react-redux";
import configureStore from "./src/store";

const store = configureStore();

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
