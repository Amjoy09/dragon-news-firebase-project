import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-center">Login With</h2>
      <div className="LOGIN-BTN mt-5 space-y-2">
        <button className="btn btn-outline w-full bg-transparent hover:bg-orange-600 hover:text-white hover:font-light">
          <FcGoogle size={24} /> Login With Google
        </button>

        <button className="btn btn-outline hover:bg-zinc-800 hover:text-white hover:font-light w-full bg-transparent">
          <FaGithub size={24} /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
