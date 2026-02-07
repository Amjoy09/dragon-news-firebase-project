import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen mt-20 pb-10">
      <div className="w-4/12 bg-base-100 shadow-2xl px-14 py-12">
        <form onSubmit={handleRegister}>
          <h1 className="text-2xl font-semibold text-center">
            Register your account
          </h1>
          <hr className="text-gray-200 my-6" />
          <fieldset className="fieldset">
            <label type="email" className="text-[16px] font-semibold mb-1">
              Email Address
            </label>
            <input
              name="email"
              placeholder="Email"
              className="input w-full mb-4"
              required
            />
            <label className="text-[16px] font-semibold mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full mb-4"
              placeholder="Password"
              required
            />

            <label className="text-[16px] font-semibold mb-1">Your Name</label>
            <input
              name="name"
              className="input w-full mb-4 bg-blue-100"
              placeholder="Your Name"
              required
            />
            <label className="text-[16px] font-semibold mb-1">Photo URL</label>
            <input
              name="photo"
              className="input w-full bg-blue-100"
              placeholder="Photo URL"
              required
            />

            <button
              type="submit"
              className="btn btn-neutral bg-base-content text-white mt-4"
            >
              Register
            </button>

            <p className="font-semibold text-base-content text-center mt-3">
              Already Have an Account?{" "}
              <Link
                to="/auth/login"
                className="text-red-500 hover:underline text-[14px]"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
