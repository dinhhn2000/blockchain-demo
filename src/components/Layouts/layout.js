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
      <NavLink to="/" exact>
        <SettingOutlined style={{ marginRight: 10 }} />
        Settings
      </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink
        to="/"
        exact
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        <LogoutOutlined style={{ marginRight: 10 }} />
        Logout
      </NavLink>
    </Menu.Item>
  </Menu>
);

export default function CustomLayout(props) {
  return localStorage.getItem("publicKey") === null ? (
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
            // defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item icon={<DashboardOutlined style={{ fontSize: 25 }} />} key="1">
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
              title="Statistics"
            >
              <Menu.Item key="4">
                <NavLink to="/wallet-statistics" exact>
                  Account statistics
                </NavLink>
              </Menu.Item>
              <Menu.Item key="5">
                <NavLink to="/statistics" exact>
                  System statistics
                </NavLink>
              </Menu.Item>
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
