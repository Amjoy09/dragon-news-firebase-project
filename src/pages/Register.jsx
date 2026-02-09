import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { use, useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [show, setShow] = useState(false);
  const { auth } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;

    const RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!RegExp.test(password)) {
      return toast.error(
        "Please use 8+ characters with a mix of letters (upper & lower), numbers, and symbols.",
      );
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName,
          photoURL,
        })
          .then(() => {
            sendEmailVerification(auth.currentUser)
              .then(() => {
                console.log(res);
                toast.success(
                  "Please, Check your Gmail inbox/spam to validate your email",
                );
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.message);
              });
            console.log(auth.currentUser.displayName);
            console.log(auth.currentUser.photoURL);
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.message);
          });
        console.log(res);
        toast.success("Sign Up Successful");
      })
      .catch((err) => {
        const errCode = err.code;

        console.log(errCode);
        if (errCode === "auth/weak-password") {
          toast.error("Password should be at least 6 characters");
        } else if (errCode === "auth/email-already-in-use") {
          toast.error("This email is already registered");
        } else if (errCode === "auth/invalid-email") {
          toast.error("Invalid email address");
        } else if (errCode === "auth/user-not-found") {
          toast.error("No account found with this email");
        } else if (errCode === "auth/wrong-password") {
          toast.error("Incorrect password");
        } else if (errCode === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later");
        } else if (errCode === "auth/network-request-failed") {
          toast.error("Network error. Check your internet connection");
        } else if (errCode === "auth/user-disabled") {
          toast.error("This account has been disabled");
        } else if (errCode === "auth/operation-not-allowed") {
          toast.error("Login method not enabled");
        } else if (errCode === "auth/invalid-credential") {
          toast.error("Invalid login credentials");
        } else if (errCode === "auth/popup-closed-by-user") {
          toast.error("Login popup was closed");
        } else if (errCode === "auth/cancelled-popup-request") {
          toast.error("Login cancelled");
        } else {
          toast.error("Something went wrong. Please try again");
        }
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
