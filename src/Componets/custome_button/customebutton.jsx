import React from "react";
import "./custome-button.scss";

const CustomeButton = ({
  isGoogle_signin,
  inverted,
  children,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogle_signin ? "googleSignIn" : null}
      ${inverted ? "inverted" : null} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default CustomeButton;
