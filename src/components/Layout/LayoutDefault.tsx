import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import Main from "../../components/Main/Main";
import "./style.css";
import { Link } from "react-router-dom";
const { Header, Content, Sider, Footer } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `Home`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const LayoutDefault = (props: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Header className="header" style={{ backgroundColor: "antiquewhite" }}>
        <div>
          <div className="logo" />
          <div>Logo</div>
        </div>
        <div
          style={{
            width: 200,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to={"/cart"}>Cart</Link>
          <Link
            to={"/login"}
            onClick={() => {
              localStorage.clear();
            }}
          >
            Log out
          </Link>
          <div>Hi, {localStorage.getItem("user")}</div>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>HomePage</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 16,
              margin: 0,
              minHeight: 630,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
      <Layout>
        <Footer>@2023</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutDefault;
