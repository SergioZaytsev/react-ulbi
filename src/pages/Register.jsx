import React, { useState } from "react";

import { Link } from "react-router-dom";
import Form from "../components/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [succes, setSucces] = useState(false);
  function newUser(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setSucces(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  if (succes) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Form title="регистрация нового пользователя" handleLogin={newUser} />
      <Link to="/">на страницу авторизации</Link>
    </div>
  );
};

export default Register;
