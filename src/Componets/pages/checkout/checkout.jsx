import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../checkout-Item/checkoutItem";
const CheckOut = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>remove</span>
        </div>
      </div>

      <div className="total">
        <span>$:{total}</span>
      </div>
      {cartItems.map((cartitem) => (
        <CheckoutItem key={cartitem.id} cartitem={cartitem} />
      ))}
    </div>
  );
};
const mapStateTOProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});
export default connect(mapStateTOProps)(CheckOut);
