/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Config/firebaseConfig";
import { useNavigate } from "react-router-dom";

// context
export const AuthContext = createContext(null);

// context provider
function AuthContextProvider({ children }) {
  const [registerFormData, setRegisterFormData] = useState({
    userName: "",
    userMail: "",
    userPassword: "",
  });

  const [loginFormData, setLoginFormData] = useState({
    userMail: "",
    userPassword: "",
  });

  const navigate = useNavigate();

  function registerWithFirebase() {
    const { userMail, userPassword } = registerFormData;
    return createUserWithEmailAndPassword(auth, userMail, userPassword);
  }

  function loginWithFirebase() {
    const { userMail, userPassword } = loginFormData;

    return signInWithEmailAndPassword(auth, userMail, userPassword);
  }

  function handleLogOut() {
    return signOut(auth);
  }

  const [user, setUser] = useState(null);

  // this useEffect when App is mounted
  useEffect(() => {
    // This method listens for changes in the authentication state of the user.
    // It takes a callback function that is triggered whenever the user's sign-in state changes
    // (e.g., when a user signs in, signs out, or the authentication state is changed).
    const checkAuthState = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );
    return () => {
      checkAuthState();
    };
  }, []);

  // this useEffect when user changes
  useEffect(() => {
    if (user) {
      navigate("/user-profile");
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        registerFormData,
        setRegisterFormData,
        registerWithFirebase,
        user,
        loginFormData,
        setLoginFormData,
        loginWithFirebase,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
