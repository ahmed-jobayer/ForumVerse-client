import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {

  // google login
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider);
  };

  const authinfo = {
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
