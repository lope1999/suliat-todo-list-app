import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      //   className={`button ${props.className}`}
      className={props.className || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span className={"button__text"}>{props.text}</span>
      <span className={"button__icon"}>
        <i className={props.icon} />
      </span>
    </button>
  );
};

export default Button;
