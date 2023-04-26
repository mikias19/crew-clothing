import React from "react";
import "./collection_item_style.scss";
import CustomeButton from "../custome_button/customebutton";
import { connect } from "react-redux";
import { addToCart } from "../redux/cart/cart.action";
const CollectionItems = ({ item, addToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <div className="custome-button">
        <CustomeButton onClick={() => addToCart(item)} inverted="inverted">
          Add to Cart
        </CustomeButton>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItems);
