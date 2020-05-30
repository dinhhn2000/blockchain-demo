import React, { useState, useEffect } from "react";
import { Table, message } from "antd";
import axios from "axios";

require("dotenv").config();
const apiUrl = process.env.REACT_APP_API_URL;

export default function Statistics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    let url = apiUrl + "all-transactions";

    axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        let { transactions } = result.data;
        setData(
          transactions.map((tx) => {
            if (tx.from === null) tx.from = "System";
            return tx;
          })
        );
      })
      .catch((err) => {
        message.error("Something wrong happened");
      });
  };

  const columns = [
    {
      title: "From Address",
      dataIndex: "from",
      key: "from",
      ellipsis: true,
    },
    {
      title: "To Address",
      dataIndex: "to",
      key: "to",
      ellipsis: true,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      ellipsis: true,
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}
