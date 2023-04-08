import React from "react";
import "./custome-button.scss";

const CustomeButton = ({ isGoogle_signin, children, ...otherProps }) => {
  return (
    <button
      className={`${isGoogle_signin ? "googleSignIn" : null} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default CustomeButton;
