import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { Link } from "react-router-dom";

const Form = ({ title, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="login-wrapper">
      <h1>{title}</h1>
      <MyInput
        value={email}
        type="email"
        placeholder="введите электронный адрес"
        onChange={(event) => setEmail(event.target.value)}
      />
      <MyInput value={pass} type="password" placeholder="********" onChange={(event) => setPass(event.target.value)} />

      <MyButton onClick={() => handleLogin(email, pass)}>{title}</MyButton>
    </div>
  );
};

export default Form;
