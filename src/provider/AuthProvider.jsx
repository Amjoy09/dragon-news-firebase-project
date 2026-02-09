import { getAuth } from "firebase/auth";
import { useState } from "react";
import app from "../firebase/Firebase.config";
import { AuthContext } from "./AuthContext";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [reader, setReader] = useState(null);

  // const createUser = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  // const signIn = (email, password) => {
  //   return signInWithEmailAndPassword(auth, email, password);
  // };

  // const logOut = () => {
  //   return signOut(auth);
  // };

  const AuthData = {
    reader: reader,
    setReader: setReader,
    // createUser:createUser,
    // logOut: logOut,
    // signIn: signIn,
    auth: auth,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
