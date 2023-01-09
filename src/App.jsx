import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";


const App = (props) => {
  const initListUser = () => {

  };

  useEffect(() => {
    initListUser();
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
