import React from "react";
import logo from "../../../logo.svg";
import "../Authentication.css";
import SignInForm from "../../../components/Forms/SignInForm";

export default function SignIn() {
  return (
    <div className="Sign-in-header">
      <img src={logo} className="Sign-in-logo" alt="logo" />
      <h2 style={{ color: "white" }}>ElementCoins</h2>
      <SignInForm />
    </div>
  );
}
