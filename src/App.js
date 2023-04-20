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
import { ShopPage } from "./Componets/pages/shop/shop";
import Header from "./Componets/header/header";
import SignInAndSingup from "./Componets/pages/sign-inAndsign-up/sign-inAndsign-up";
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
          <Route path="/signin" element={<SignInAndSingup />} />
        </Routes>
      </div>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user));
  },
});
export default connect(null, MapDispatchToProps)(App);
