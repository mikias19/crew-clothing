import React from "react";
import "./form-input.scss";
const FormInput = ({ label, onChangeHandler, ...otherProps }) => {
  return (
    <div className="group">
      <input
        onChange={onChangeHandler}
        className="form-input"
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
