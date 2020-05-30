import React, { useState } from "react";
import axios from "axios";
import { Input, Button, message } from "antd";
import { DollarOutlined, WalletOutlined, SendOutlined } from "@ant-design/icons";

require("dotenv").config();
const apiUrl = process.env.REACT_APP_API_URL;

export default function SendTransaction() {
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");

  const handleAmountChange = (value) => {
    if (!isNaN(value)) setAmount(value);
    else {
      message.error("Amount only contains number", 0.5);
      setAmount(amount);
    }
  };

  const sendTransaction = () => {
    let url = apiUrl + "send";

    axios({
      method: "post",
      url: url,
      data: {
        privateKey: localStorage.getItem("privateKey"),
        from: localStorage.getItem("publicKey"),
        to: address,
        amount,
      },
    })
      .then((result) => {
        message.info(result.data.message);
      })
      .catch((err) => {
        message.error("Something wrong happened");
      });
  };

  return (
    <div>
      <h1 style={{ fontSize: 24, marginTop: 10 }}>Amount</h1>
      <Input
        onChange={(e) => handleAmountChange(e.target.value)}
        size="large"
        value={amount}
        prefix={<DollarOutlined />}
      />
      <h1 style={{ fontSize: 24, marginTop: 10 }}>To address</h1>
      <Input
        onChange={(e) => setAddress(e.target.value)}
        size="large"
        value={address}
        prefix={<WalletOutlined />}
      />
      <Button
        type="primary"
        shape="round"
        icon={<SendOutlined />}
        size="large"
        style={{ marginTop: 20 }}
        onClick={() => sendTransaction()}
      >
        Send transaction
      </Button>
    </div>
  );
}
