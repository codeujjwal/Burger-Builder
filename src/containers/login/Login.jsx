import React, { useState } from "react";
import "./login.css";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../redux/action";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signingoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        props.userAdded(result.user);
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        props.userAdded(auth.user);
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          props.userAdded(auth.user);
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <h1>WELCOME TO</h1>
      <h3>MY BURGER MAKER</h3>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your E-Mail"
          />

          <input
            placeholder="Enter Your Pasword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            By continuing, you agree to Burger Builder's Conditions of Use and
            Privacy Notice.
          </p>
          <button type="submit" onClick={signin} className="login_signin">
            Sign In
          </button>
        </form>

        <button onClick={register} className="login_signup">
          Sign Up
        </button>
        <button className="google" onClick={signingoogle}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
}

const mapdispatch = (dispatch) => {
  return {
    userAdded: (user) => {
      dispatch({ type: actionTypes.USER, userinfo: user });
    },
  };
};

export default connect(null, mapdispatch)(Login);
