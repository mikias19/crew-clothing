import React from "react";
import "./cart-dropdown.scss";
import CustomeButton from "../custome_button/customebutton";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomeButton>Go to the check out</CustomeButton>
    </div>
  );
};

export default CartDropDown;
