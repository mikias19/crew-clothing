import React from "react";
import "./signin.style.scss";
import FormInput from "../FormInput/form-input";
import CustomeButton from "../custome_button/customebutton";
import { signInWithGoogle } from "../Firebase/firebase.utility";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  submiteHandler = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  changeHandler = (event) => {
    console.log(event);
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h1>I already Have account</h1>
        <span className="title">Sign in with your email and password </span>
        <form onSubmit={this.submiteHandler} className="form">
          <FormInput
            label="email"
            name="email"
            type="email"
            value={this.state.email}
            required
            onChangeHandler={this.changeHandler}
          />

          <FormInput
            label="password"
            name="password"
            type="password"
            value={this.state.password}
            onChangeHandler={this.changeHandler}
            required
          />
          <div className="button">
            <CustomeButton type="submit">Sign In</CustomeButton>
            <CustomeButton onClick={signInWithGoogle} isGoogle_signin>
              Sign In with google
            </CustomeButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
