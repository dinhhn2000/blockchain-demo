import React, { useState } from "react";
import { Tooltip, Button } from "antd";
import { WalletOutlined, SwapOutlined } from "@ant-design/icons";

export default function Balance(props) {
  const [eth] = useState(props.eth);
  return (
    <div style={{ display: "flex", flexDirection: "row", marginRight: 20 }}>
      <div
        style={{
          width: 350,
          padding: 20,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#5A78F0",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "30%" }}>
          <WalletOutlined style={{ color: "white", fontSize: 50 }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 20,
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1 style={{ color: "white", fontSize: 32, margin: 0 }}>Balance</h1>
            <p
              style={{
                color: "white",
                fontSize: 18,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p style={{ color: "white", fontSize: 24, margin: 0, marginRight: 5 }}>{eth}</p> ETH
            </p>
          </div>
          <Tooltip title="Refresh">
            <Button
              style={{ backgroundColor: "transparent", borderColor: "transparent" }}
              icon={<SwapOutlined style={{ color: "white", fontSize: 32, margin: 0 }} />}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
