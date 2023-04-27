import React from "react";
import "./cart-dropdown.scss";
import CustomeButton from "../custome_button/customebutton";
import { connect } from "react-redux";
import CartItem from "../cart-item/cartItem";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomeButton>Go to the check out</CustomeButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });
export default connect(mapStateToProps)(CartDropDown);
