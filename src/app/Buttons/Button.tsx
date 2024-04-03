import React from "react";

const Button = ({ children, onClick, className }: any) => {
  return (
    <button className={`btn-11 ${className}`} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
