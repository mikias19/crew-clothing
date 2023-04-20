import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/firebase.utility";
import { ReactComponent as Logo } from "../assets/crown.svg";
import "./header.style.scss";
const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({ currentUser: state.user.currentUser });
export default connect(mapStateToProps)(Header);
