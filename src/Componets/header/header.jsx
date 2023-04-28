import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/firebase.utility";
import { ReactComponent as Logo } from "../assets/crown.svg";
import "./header.style.scss";
import CartIcon from "../collection-item/cart-icon/cart-icon";
import CartDropDown from "../cart/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selector";
import { slectCartHidden } from "../redux/cart/cart.selector";
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link to="/signin" className="option">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: slectCartHidden,
});
export default connect(mapStateToProps)(Header);
