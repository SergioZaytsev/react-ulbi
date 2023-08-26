import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("auth");
    setAuth(false);
    navigate("/");
  }

  return (
    <>
      <ul className="navbar">
        <li onClick={logOut}>Выйти</li>
        <li>
          <Link to="/About">О сайте</Link>
        </li>
        <li>
          <Link to="/Posts">Посты</Link>
        </li>
      </ul>
      <div className="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
