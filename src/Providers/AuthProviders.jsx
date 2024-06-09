import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // google login
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // email password signup
  const emailPasswordSignup = (email, password, displayName, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
      return updateProfile(userCredential.user,{
        displayName,
        photoURL,
      })
      .then(()=>{
        return userCredential
      })
    })
  };

  // update user profile

  // const updateUserProfile = (name, photoURL) => {
  //   setLoading(true);
  //   return updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photoURL,
  //   });
  // };

  // signout
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("user are live in auth", auth.currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authinfo = {
    user,
    loading,
    signOutUser,
    googleSignIn,
    emailPasswordSignup,
    setLoading,
    setUser,
  };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
