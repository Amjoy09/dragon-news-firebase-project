import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { use, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [show, setShow] = useState(false);
  const { auth } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email?.value;
    const password = e.target.password?.value;

    const RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!RegExp.test(password)) {
      return toast.error(
        "Please use 8+ characters with a mix of letters (upper & lower), numbers, and symbols.",
      );
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        toast.success("Sign Up Successful");
      })
      .catch((err) => {
        console.log(err);
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
              className="input w-full bg-blue-100 mb-4"
              placeholder="Photo URL"
              required
            />
            <label type="email" className="text-[16px] font-semibold mb-1">
              Email Address
            </label>
            <input
              name="email"
              placeholder="Email"
              className="input w-full mb-4"
              required
            />
            <div className="relative">
              <label className="text-[16px] font-semibold mb-1">Password</label>

              <input
                name="password"
                type={show ? "text" : "password"}
                className="input w-full mb-4"
                placeholder="●●●●●●●●●●●"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute top-7.5 right-4 cursor-pointer z-20"
              >
                {" "}
                {show ? <FaEye size={24} /> : <FaEyeSlash size={24} />}
              </span>
            </div>

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
