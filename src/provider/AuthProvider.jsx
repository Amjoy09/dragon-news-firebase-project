import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import app from "../firebase/Firebase.config";
import { AuthContext } from "./AuthContext";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [reader, setReader] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUserWithEmailAndPassFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailAndPassFunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOutFunc = () => {
    return signOut(auth);
  };

  const sendEmailVerificationFunc = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const sendPassResetEmailFunc = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const googleSignInFunc = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignInFunc = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const AuthData = {
    createUserWithEmailAndPassFunc,
    signInWithEmailAndPassFunc,
    sendEmailVerificationFunc,
    reader,
    setReader,
    updateProfileFunc,
    googleSignInFunc,
    SignOutFunc,
    githubSignInFunc,
    sendPassResetEmailFunc,
    auth,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
