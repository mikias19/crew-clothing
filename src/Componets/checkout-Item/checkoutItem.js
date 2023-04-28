import React from "react";
import "./checkoutItem.scss";
import {
  clearItemFromCart,
  removeItemFormCart,
  addToCart,
} from "../redux/cart/cart.action";
import { connect } from "react-redux";

const CheckoutItem = ({ cartitem, clearItem, removeItem, addItem }) => {
  const { imageUrl, name, price, quantitiy } = cartitem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartitem)}>
          &#10094;
        </div>
        <span className="value">{quantitiy}</span>
        <div className="arrow" onClick={() => addItem(cartitem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartitem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItemFormCart(item)),
  addItem: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
