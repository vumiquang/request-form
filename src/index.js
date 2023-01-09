import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.js";
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
