import React from "react";
import Address from "../../components/Dashboard/Address";
import Balance from "../../components/Dashboard/Balance";
import Network from "../../components/Dashboard/Network";

export default function Main() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: "space-between",
      }}
    >
      <Address address="0x918BB72D37Ac84DE7c790EFBB0B1b9f9283a3892" />
      <Balance eth={0} />
      <Network network="elementcoins.com(ETH)" lastBlock={10151380} />
    </div>
  );
}
