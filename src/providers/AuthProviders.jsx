
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState('')

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };



  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  const userUpdate = (user, userName) => {
    return updateProfile(user, userName);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //  console.log("current user", currentUser);
      if (currentUser) {
        setPhoto(currentUser.photoURL);
        setName(currentUser.displayName);
      }


      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);


  const authInfo = {
    user,
    loading,
    createUser, photo,
    signIn, googleSignIn, userUpdate, name,
    logOut, githubLogin
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders; 