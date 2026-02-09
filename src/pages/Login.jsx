import { Link } from "react-router";

import { signInWithEmailAndPassword } from "firebase/auth";
import { use, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const Login = () => {
  const [show, setShow] = useState(false);
  const { auth, reader, setReader } = use(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user.emailVerified);
        if (res.user.emailVerified == false) {
          toast.error("Your Email is not verified");
          return;
        }
        setReader(res.user);
        toast.success("Logged in Successfully");
      })
      .catch((err) => {
        const errCode = err.code;
        toast.error(errCode);
      });
  };

  console.log(reader);

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
            <div className="relative">
              <label className="text-[16px] font-semibold mb-1">Password</label>
              <input
                name="password"
                type={show ? "text" : "password"}
                className="input w-full"
                placeholder="Password"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute top-7.5 right-4 cursor-pointer"
              >
                {show ? <LuEye size={24} /> : <LuEyeClosed size={24} />}
              </span>
            </div>
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
