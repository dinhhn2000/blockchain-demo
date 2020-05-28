import React, { useState } from "react";
import { Tooltip, Button } from "antd";
import { ShareAltOutlined, SyncOutlined } from "@ant-design/icons";

export default function Network(props) {
  const [network] = useState(props.network);
  const [lastBlock] = useState(props.lastBlock);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          width: 350,
          padding: 20,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#25B0E8",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "30%" }}>
          <ShareAltOutlined style={{ color: "white", fontSize: 50 }} />
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
            <h1 style={{ color: "white", fontSize: 32, margin: 0 }}>Network</h1>
            <p style={{ color: "white", fontSize: 18, margin: 0 }}>{network}</p>
            <p style={{ color: "white", fontSize: 18 }}>Last block#: {lastBlock}</p>
          </div>
          <Tooltip title="Change">
            <Button
              style={{ backgroundColor: "transparent", borderColor: "transparent" }}
              icon={<SyncOutlined style={{ color: "white", fontSize: 32, margin: 0 }} />}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
