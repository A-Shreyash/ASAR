import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  BarChartOutlined,
  LineChartOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./styles.scss";
import "antd/dist/antd.min.css";
import Logo from "../assets/logo/dolphinLogo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SubMenu from 'antd/lib/menu/SubMenu';
import Dashboard from "../pages/dashboard/dashboard";
import ComplaintReport from "../pages/analytic/complaintReport";

const { Header, Sider, Content } = Layout;

const Routing = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh",}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <img src={Logo} className="logo" alt="" />

          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item className="menu_item" key="1" icon={<HomeOutlined />}>
              <span> Dashboard </span>
              <Link to="/" />
            </Menu.Item>
            <SubMenu
                className="menu-item"
                key='2'
                icon={<BarChartOutlined />}
                title={
                    <span> Analytic </span>
                }
            >
                <Menu.Item className="menu_item" key="2" icon={<LineChartOutlined />}>
                <span> Complaint Report </span>
                <Link to="/analityc/complaint-report" />
                </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ minHeight: "100vh" }}>
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            // className="site-layout-background-content"
            style={{
              margin: "24px 16px",
              // padding: 24,
              // minHeight: 280,
            }}
          >
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route
                path="/analityc/complaint-report"
                element={<ComplaintReport />}
              />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Routing;
