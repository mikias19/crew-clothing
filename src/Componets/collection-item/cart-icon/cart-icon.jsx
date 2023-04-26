import React from "react";

import "./cart-icon.scss";
import { toogleCartHandler } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/122 shopping-bag.svg";
import { connect } from "react-redux";

const CartIcon = ({ toogleCartHandler }) => {
  return (
    <div className="cart-icon" onClick={toogleCartHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toogleCartHandler: () => dispatch(toogleCartHandler()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
