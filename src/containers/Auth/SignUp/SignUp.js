import React from 'react'
import logo from "../../../logo.svg";
import "../Authentication.css";
import SignUpForm from '../../../components/Forms/SignUpForm';

export default function SignUp() {
  return (
    <div className="Sign-in-header">
      <img src={logo} className="Sign-in-logo" alt="logo" />
      <h2 style={{ color: "white" }}>ElementCoins</h2>
      <SignUpForm />
    </div>
  )
}
