import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import React, { use } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { auth, setReader } = use(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setReader(res.user);
        toast.success("Sign Up Successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        console.log(res);
        setReader(res.user);
        toast.success("Sign Up Successful");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Auth not Allowed");
      });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-center">Login With</h2>
      <div className="LOGIN-BTN mt-5 space-y-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full bg-transparent hover:bg-orange-600 hover:text-white hover:font-light"
        >
          <FcGoogle size={24} /> Login With Google
        </button>

        <button
          onClick={handleGithubSignIn}
          className="btn btn-outline hover:bg-zinc-800 hover:text-white hover:font-light w-full bg-transparent"
        >
          <FaGithub size={24} /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
