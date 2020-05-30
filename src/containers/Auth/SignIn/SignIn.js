import React from "react";
import logo from "../../../logo.svg";
import "../Authentication.css";
import SignInForm from "../../../components/Forms/SignInForm";
import axios from "axios";
import { message } from "antd";

require("dotenv").config();
const apiUrl = process.env.REACT_APP_API_URL;

export default function SignIn() {
  const signIn = async (values) => {
    let url = apiUrl + "sign-in";

    axios({
      method: "post",
      url: url,
      data: {
        username: values.username,
        password: values.password,
      },
    })
      .then((result) => {
        let { publicKey } = result.data;
        let errorMessage = result.data.message;
        if (!errorMessage) {
          localStorage.setItem("username", values.username);
          localStorage.setItem("privateKey", values.privateKey);
          localStorage.setItem("publicKey", publicKey);
          window.location.replace("/");
        } else message.error(errorMessage);
      })
      .catch((err) => {
        message.error("Something wrong happened");
      });
  };

  return (
    <div className="Sign-in-header">
      <img src={logo} className="Sign-in-logo" alt="logo" />
      <h2 style={{ color: "white" }}>ElementCoins</h2>
      <SignInForm submit={signIn} />
    </div>
  );
}
