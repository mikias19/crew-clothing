import React from "react";
import "./cart-dropdown.scss";
import CustomeButton from "../custome_button/customebutton";
import { connect } from "react-redux";
import CartItem from "../cart-item/cartItem";
import { selectCartItems } from "../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toogleCartHandler } from "../redux/cart/cart.action";
const CartDropDown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length !== 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <div className="no-item"> no item added yet</div>
        )}
      </div>
      <CustomeButton
        onClick={() => {
          checkoutHandler();
          dispatch(toogleCartHandler());
        }}
      >
        Go to the check out
      </CustomeButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps)(CartDropDown);
