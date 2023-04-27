import React from "react";
import "./cartItem.scss";

const CartItem = ({ item: { imageUrl, name, price, quantitiy } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="Item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantitiy} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
