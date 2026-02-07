import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-300 min-h-screen">
      <div className="pt-7 px-35">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
