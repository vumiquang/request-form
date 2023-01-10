/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Loading from "./assets/loading.gif";
import { useSelector, useDispatch } from "react-redux";
import ToastMessage from "./components/ToastMessage/ToastMessage";
const App = (props) => {
  const loading = useSelector((state) => state.loading.loading);
  return (
    <>
      <ToastMessage />
      {loading && (
        <div className="loading">
          <img src={Loading} />
        </div>
      )}
      <div className="main">
        <Outlet />
      </div>
    </>
  );
};

export default App;
