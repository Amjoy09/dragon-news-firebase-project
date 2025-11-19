import React from "react";
import { NavLink } from "react-router";
import userImg from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className=""></div>
      <div className="NAV text-accent text-[18px] font-medium flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="LOGIN-BTN flex gap-5 items-center">
        <img src={userImg} alt="" />
        <button className="bg-base-content text-[#ffffff] text-[20px] font-semibold px-8 py-1.5 hover:cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
