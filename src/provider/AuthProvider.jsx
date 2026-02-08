import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase/Firebase.config";
import { AuthContext } from "./AuthContext";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const createUser = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const AuthData = {
    user: user,
    setUser: setUser,

    logOut: logOut,
    signIn: signIn,
    auth: auth,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
