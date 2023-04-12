import React from "react";
import "./sign-inAndsign-up.scss";
import SignIn from "../../signin/signin";
import Signup from "../../signup/signup";
const SignInAndSingup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Signup />
    </div>
  );
};

export default SignInAndSingup;
