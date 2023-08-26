import React from "react";

import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";
import { useState } from "react";
import Form from "../components/Form";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slcie/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [isError, setError] = useState("");

  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  //const loginData = useAuth();

  function loginSign(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
        setAuth(true);
        navigate("/posts");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }
  return (
    <>
      {isError && <h3 style={{ color: "red" }}>{isError}</h3>}
      <Form title="Авторизация" handleLogin={loginSign}></Form>
      <Link to="register">зарегистирровться</Link>
    </>
  );
};

export default LoginPage;
