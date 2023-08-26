import React from "react";
import { useRouteError } from "react-router-dom";
import MyButton from "./../components/UI/button/MyButton";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <Navigate to="/" />
      <h1>ErrorPage, такой страницы нет</h1>
      <i>{error.statusText || error.message}</i>
      <MyButton>
        <Link to="/">на доступную страницу</Link>
      </MyButton>
    </div>
  );
};

export default ErrorPage;
