import "./App.css";
import React from "react";
import {
  auth,
  createUserProfileDocument,
} from "../src/Componets/Firebase/firebase.utility";
//import store from "./Componets/redux/store";

import { connect } from "react-redux";
//import { produce } from "immer";
import { setCurrentUser } from "./Componets/redux/user/user.action";
import { HomePage } from "./Componets/pages/homepages/homepage.jsx";
import { Route, Routes } from "react-router-dom";
//import { Navigate } from "react-router-dom";
import { ShopPage } from "./Componets/pages/shop/shop";
import Header from "./Componets/header/header";
import SignInAndSingup from "./Componets/pages/sign-inAndsign-up/sign-inAndsign-up";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./Componets/redux/user/user.selector";
import CheckOut from "./Componets/pages/checkout/checkout";
//import { current } from "immer";
class App extends React.Component {
  unsubscriptionFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscriptionFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //this.setState({ currentUser: user });
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);
        useRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscriptionFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            exact
            path="/signin"
            // render={() => {
            //   return this.props.currentUser ? (
            //     <Navigate to="/" />
            //   ) : (
            //     <SignInAndSingup />
            //   );
            // }}

            element={<SignInAndSingup />}
          />
          <Route path="/checkout" element={<CheckOut />}></Route>
        </Routes>
      </div>
    );
  }
}
const mapStateToprops = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const MapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user));
  },
});
export default connect(mapStateToprops, MapDispatchToProps)(App);
