import React from "react";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import "./cart-icon.scss";
import { toogleCartHandler } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/122 shopping-bag.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
const CartIcon = ({ toogleCartHandler, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toogleCartHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toogleCartHandler: () => dispatch(toogleCartHandler()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
