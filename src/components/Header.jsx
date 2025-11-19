import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center mt-7 space-y-4">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <p className="text-[18px] text-accent">
        Journalism Without Fear or Favour
      </p>
      <p className="text-[20px] font-medium text-accent">
        {format(new Date(), "EEEE, MMMM d, yyyy")}
      </p>
    </div>
  );
};

export default Header;
