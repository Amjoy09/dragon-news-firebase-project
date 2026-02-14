import React, { use } from "react";
import { Link, NavLink } from "react-router";

import { AuthContext } from "../provider/AuthContext";
import { BounceLoader } from "react-spinners";
import { toast } from "react-toastify";

const Navbar = () => {
  const { reader, setReader, SignOutFunc, loading, setLoading } =
    use(AuthContext);
  const handleLogOut = () => {
    SignOutFunc()
      .then(() => {
        toast.success("You've Signed Out");
        setLoading(false);
        setReader(null);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  console.log(reader);

  return (
    <div className="flex items-center justify-between">
      <div></div>
      <div className="NAV text-accent text-[18px] font-medium flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className="LOGIN-BTN flex gap-5 items-center ">
        {loading ? (
          <BounceLoader />
        ) : reader ? (
          <div className="dropdown dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer w-15 h-15 border-2 rounded-full"
            >
              <img
                className="rounded-full p-0.5"
                src={reader.photoURL}
                alt=""
              />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <p className="text-center text-lg text-black font-medium">
                {reader.displayName}
              </p>

              <li>
                <a>{reader.email}</a>
              </li>
              <button
                onClick={handleLogOut}
                className="btn bg-black text-white text-md font-semibold"
              >
                Log Out
              </button>
            </ul>
          </div>
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
