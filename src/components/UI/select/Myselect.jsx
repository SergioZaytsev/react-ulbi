import React from "react";
import classes from "./Myselect.module.css";

const Myselect = ({ options, defaultValue, onChange, value }) => {
  return (
    <select className={classes.Myselect} value={value} onChange={onChange}>
      <option disabled value="">
        {defaultValue}
      </option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Myselect;
