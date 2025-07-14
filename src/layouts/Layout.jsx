import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const LayOut = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
      {/* {!isAdmin && <Footer />} */}
    </React.Fragment>
  );
};

export default LayOut;
