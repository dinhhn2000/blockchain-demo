import React, { useState } from "react";
import { Avatar, Tooltip, Button } from "antd";
import { UserOutlined, CopyOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Address(props) {
  const [address] = useState(props.address);

  return (
    <div style={{ display: "flex", flexDirection: "row", marginRight: 20 }}>
      <div
        style={{
          width: 350,
          padding: 20,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#7070E3",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "30%" }}>
          <Avatar style={{ backgroundColor: "cornflowerblue" }} size={60} icon={<UserOutlined />} />
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
          <h1 style={{ color: "white", fontSize: 32, margin: 0 }}>Address</h1>
          <p style={{ color: "white", fontSize: 18, wordBreak: "break-all" }}>{address}</p>
          <Tooltip title="Copy">
            <CopyToClipboard text={address}>
              <Button
                style={{ backgroundColor: "transparent", borderColor: "transparent" }}
                icon={<CopyOutlined style={{ color: "white", fontSize: 32, margin: 0 }} />}
              />
            </CopyToClipboard>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
