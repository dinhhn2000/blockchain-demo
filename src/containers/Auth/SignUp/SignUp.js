import React from "react";
import logo from "../../../logo.svg";
import "../Authentication.css";
import SignUpForm from "../../../components/Forms/SignUpForm";
import axios from "axios";
import { message } from "antd";

require("dotenv").config();
const apiUrl = process.env.REACT_APP_API_URL;

export default function SignUp() {
  const signUp = async (values) => {
    let url = apiUrl + "sign-up";

    axios({
      method: "post",
      url: url,
      data: {
        username: values.username,
        password: values.password,
      },
    })
      .then((result) => {
        console.log(result);

        let { username, publicKey, privateKey } = result.data;
        let errorMessage = result.data.message;
        if (!errorMessage) {
          localStorage.setItem("username", username);
          localStorage.setItem("publicKey", publicKey);
          localStorage.setItem("privateKey", privateKey);
          window.location.reload();
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
      <SignUpForm submit={signUp} />
    </div>
  );
}
