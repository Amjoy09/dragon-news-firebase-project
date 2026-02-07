import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You have logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-between">
      <div className="">{user && user.email}</div>
      <div className="NAV text-accent text-[18px] font-medium flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="LOGIN-BTN flex gap-5 items-center">
        <img src={userImg} alt="" />
        {user ? (
          <Link
            onClick={handleLogOut}
            className="bg-base-content text-[#ffffff] text-[20px] font-semibold px-8 py-1.5 hover:cursor-pointer"
          >
            LogOut
          </Link>
        ) : (
          <Link
            to="/auth/login"
            className="bg-base-content text-[#ffffff] text-[20px] font-semibold px-8 py-1.5 hover:cursor-pointer"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
