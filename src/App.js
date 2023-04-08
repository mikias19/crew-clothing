import "./App.css";
import React from "react";
import { auth } from "../src/Componets/Firebase/firebase.utility";
import { HomePage } from "./Componets/pages/homepages/homepage.jsx";
import { Route, Routes } from "react-router-dom";
import { ShopPage } from "./Componets/pages/shop/shop";
import Header from "./Componets/header/header";
import SignInAndSingup from "./Componets/pages/sign-inAndsign-up/sign-inAndsign-up";
class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }
  unsubscriptionFromAuth = null;
  componentDidMount() {
    this.unsubscriptionFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscriptionFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSingup />} />
        </Routes>
      </div>
    );
  }
}

export default App;
