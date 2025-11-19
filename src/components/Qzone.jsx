import React from "react";
import SwimImg from "../assets/swimming.png";
import ClassImg from "../assets/class.png";
import PlaygroundImg from "../assets/playground.png";
import bgImg from "../assets/bg.png";

const Qzone = () => {
  return (
    <div>
      <div className="mt-4 bg-base-300 rounded-sm py-4">
        <h1 className="text-xl font-semibold ml-4">Q-Zone</h1>
        <div className="QZONE-IMAGES flex flex-col items-center mt-4">
          <img src={SwimImg} alt="" />
          <img src={ClassImg} alt="" />
          <img src={PlaygroundImg} alt="" />
        </div>
      </div>
      <img className="w-full mt-5" src={bgImg} alt="" />
    </div>
  );
};

export default Qzone;
