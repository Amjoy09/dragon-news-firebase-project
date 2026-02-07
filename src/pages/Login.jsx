import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn } = use(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-4/12 bg-base-100 shadow-2xl px-14 py-12">
        <form onSubmit={handleLogIn}>
          <h1 className="text-2xl font-semibold text-center">
            Login your account
          </h1>
          <hr className="text-gray-200 my-6" />
          <fieldset className="fieldset">
            <label className="text-[16px] font-semibold mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              className="input w-full mb-4"
              placeholder="Email"
            />
            <label className="text-[16px] font-semibold mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn btn-neutral bg-base-content text-white mt-4"
            >
              Login
            </button>
            <p className="font-semibold text-base-content text-center mt-3">
              Don't Have an Account?{" "}
              <Link
                to="/auth/register"
                className="text-red-500 hover:underline text-[14px]"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
