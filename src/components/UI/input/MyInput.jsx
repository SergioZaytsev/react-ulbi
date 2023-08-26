import React from "react";
import classes from "../input/MyInpt.module.css";

const MyInput = (props) => {
  return <input className={classes.Myinput} {...props} />;
};

export default MyInput;
