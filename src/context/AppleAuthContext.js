import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { Alert } from "@mui/material";
import { auth, db } from "../firebase/Firebase";
import { doc, setDoc } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const initialState = {
  user: null,
  error: "",
};

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const AppleAuthContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const [state, dispatch] = useReducer(reduce, initialState);

  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error.message);
    }
  }

  function getUser() {
    return onAuthStateChanged(auth, (user) => {
      try {
        dispatch({
          type: "GET_USER",
          payload: user,
        });
      } catch (error) {
        dispatch({
          type: "ERROR",
          payload: error.message,
        });
      }
    });
  }

  useEffect(() => {
    getUser();
  }, []);

  async function logOut() {
    signOut(auth)
      .then(() => {
        return <Alert severity="success">Sign-out successful.</Alert>;
      })
      .catch((error) => {
        return <Alert severity="error">An error happened.</Alert>;
      });
  }

  async function register(email, password, fullName) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: fullName,
      });
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: fullName,
        uid: user.uid,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  }

  async function signInWithEmail(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("successfully completed registration", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  }

  async function signInWithFacebook() {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (error) {
      console.log(error.message);
    }
  }

  const values = {
    signInWithGoogle,
    user: state.user,
    error: state.error,
    logOut,
    register,
    signInWithFacebook,
    signInWithEmail,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AppleAuthContext;
