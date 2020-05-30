import React, { useState, useEffect } from "react";
import axios from "axios";
import Address from "../../components/Dashboard/Address";
import Balance from "../../components/Dashboard/Balance";
import Network from "../../components/Dashboard/Network";
import { message } from "antd";

require("dotenv").config();
const apiUrl = process.env.REACT_APP_API_URL;

export default function Main(props) {
  const [eth, setEth] = useState(0);

  useEffect(() => {
    refreshBalance();
  }, []);

  const refreshBalance = async () => {
    let url = apiUrl + "balance?address=" + localStorage.getItem("publicKey");

    axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        setEth(result.data.balance);
      })
      .catch((err) => {
        message.error("Something wrong happened");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: "space-between",
      }}
    >
      <Address address={localStorage.getItem("publicKey")} />
      <Balance refresh={refreshBalance} eth={eth} />
      <Network network="elementcoins.com(ETH)" lastBlock={10151380} />
    </div>
  );
}
