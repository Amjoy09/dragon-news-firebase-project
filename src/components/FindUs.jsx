import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-7">
      <h2 className="text-[20px] font-semibold">Find Us On</h2>
      <div className="FIND-US-BTNS join join-vertical w-full">
        <button className="btn rounded-t-sm bg-transparent shadow-none flex justify-start border-gray-300 py-7 hover:bg-blue-950 hover:text-white">
          <BiLogoFacebook
            size={24}
            className="bg-gray-200 p-[3px] rounded-full text-blue-700 "
          />
          Facebook
        </button>
        <button className="btn bg-transparent border-y-0 shadow-none flex justify-start border-gray-300 py-7 hover:bg-blue-400 hover:text-white ">
          <FaTwitter
            size={24}
            className="bg-gray-200 p-1.5 rounded-full text-blue-400"
          />
          Twitter
        </button>
        <button className="btn rounded-b-sm bg-transparent shadow-none flex justify-start border-gray-300 py-7 hover:bg-[linear-gradient(45deg,#405DE6,#5B51D8,#833AB4,#C13584,#E1306C,#FD1D1D,#F56040,#F77737,#FCAF45,#FFDC80)] hover:text-white">
          <BsInstagram
            size={24}
            className="bg-gray-200 p-1.5 rounded-full text-[#D82D7E]"
          />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
