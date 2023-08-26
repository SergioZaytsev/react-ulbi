import React from "react";
import cl from "./Mymodal.module.css";

const Mymodal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.main];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.content} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ marginBottom: "20px" }}>Введите новый пост</h2>
        {children}
      </div>
    </div>
  );
};

export default Mymodal;
