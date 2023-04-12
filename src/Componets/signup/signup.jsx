import { auth, createUserProfileDocument } from "../Firebase/firebase.utility";
import FormInput from "../FormInput/form-input";
import CustomeButton from "../custome_button/customebutton";
import "./signup.scss";
import React, { Component } from "react";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  render() {
    const inputSubmiting = async (event) => {
      event.preventDefault();
      const { displayName, email, password, confirmPassword } = this.state;

      if (password !== confirmPassword) {
        alert("password do not match!");
        return;
      }
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        createUserProfileDocument(user, { displayName });
        console.log(user);
      } catch (error) {
        console.error(error);
      }

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    };

    const changeHandler = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
    return (
      <div className="sign-up">
        <h1 className="title"> i do not have a account</h1>
        <span>sign up with email and password </span>
        <form onSubmit={inputSubmiting}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            label="Dispaly Name"
            required
            onChangeHandler={changeHandler}
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="Email"
            required
            onChangeHandler={changeHandler}
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            required
            onChangeHandler={changeHandler}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            label="Confirm Password"
            onChangeHandler={changeHandler}
          />
          <CustomeButton type="submit">Sign UP</CustomeButton>
        </form>
      </div>
    );
  }
}

export default Signup;
