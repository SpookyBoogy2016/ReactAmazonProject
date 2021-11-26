import React, { useState } from "react";
import "./Login.css";
import logo from "./img/amazon.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    // prevents refreshing
    e.preventDefault();
    // fancy firebase signin stuff
  };
  const signUp = (e) => {
    e.preventDefault();
    // fancy firebase signup stuff
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <img src={logo} className="login__logo" />

      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </Button>
        </form>
        <p>
          By signing-in, you agree to Amazon Clone's Condition and Use & Sale.
          Please see our Privacy notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <Button className="login__signUpButton" onClick={signUp}>
          Create and Account
        </Button>
      </div>

      <Button className="login__backButton" component={Link} to={"/"}>
        Go Back
      </Button>
    </div>
  );
}

export default Login;
