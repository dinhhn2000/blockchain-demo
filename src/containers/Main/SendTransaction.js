import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { DollarOutlined, WalletOutlined, SendOutlined } from "@ant-design/icons";

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
    console.log("Amount: ", amount);
    console.log("Address: ", address);
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
