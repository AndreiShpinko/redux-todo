import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { children, clickFunction, disabled = false, style = false } = props;

  return (
    <button
      className={style ? "button active" : "button"}
      onClick={clickFunction}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
