import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase/Firebase.config";
import { AuthContext } from "./AuthContext";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [reader, setReader] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUserWithEmailAndPassFunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailAndPassFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOutFunc = () => {
    setLoading(true);
    return signOut(auth);
  };

  const sendEmailVerificationFunc = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  const sendPassResetEmailFunc = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const googleSignInFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignInFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const updateProfileFunc = (displayName, photoURL) => {
    setLoading(true);
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
    loading,
    setLoading,
    updateProfileFunc,
    googleSignInFunc,
    SignOutFunc,
    githubSignInFunc,
    sendPassResetEmailFunc,
    auth,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      console.log(currUser);
      setReader(currUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
