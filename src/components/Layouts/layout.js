import React from "react";
import logo from "../../logo.svg";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import {
  DashboardOutlined,
  MoneyCollectOutlined,
  PieChartOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Main from "../../containers/Main/Main";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const AccountMenu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/settings">
        <SettingOutlined style={{ marginRight: 10 }} />
        Settings
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/signout">
        <LogoutOutlined style={{ marginRight: 10 }} />
        Logout
      </a>
    </Menu.Item>
  </Menu>
);

export default function CustomLayout(props) {
  return localStorage.getItem("token") === null ? (
    <div>{props.children}</div>
  ) : (
    <Layout style={{ height: "100vh" }}>
      <Header
        className="header"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <img src={logo} className="Sign-in-logo" alt="logo" style={{ width: 50, height: 50 }} />
          <h2 style={{ color: "white", margin: 0 }}>ElementCoins</h2>
        </div>
        <Dropdown overlay={AccountMenu} placement="bottomRight">
          <Avatar
            style={{ backgroundColor: "cornflowerblue" }}
            size="large"
            icon={<UserOutlined />}
          />
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item
              icon={<DashboardOutlined style={{ fontSize: 25 }} />}
              key="1"
              onClick={() => console.log("clicked")}
            >
              <NavLink to="/" exact>
                Dashboard
              </NavLink>
            </Menu.Item>
            <SubMenu
              key="sub2"
              icon={<MoneyCollectOutlined style={{ fontSize: 25 }} />}
              title="Transactions"
            >
              <Menu.Item key="2">
                <NavLink to="/send-transaction" exact>
                  Send transactions
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/send-offline" exact>
                  Send offline
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<PieChartOutlined style={{ fontSize: 25 }} />}
              title="Statitics"
            >
              <Menu.Item key="4">Account statitics</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Main />
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
