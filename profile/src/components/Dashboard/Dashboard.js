import React, { useEffect, useRef, useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardTwoTone,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UnorderedListOutlined,
  BarChartOutlined,
  LineChartOutlined,
  AreaChartOutlined,
  DotChartOutlined,
  PieChartOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import "./Dashboard.css";
import { useNavigate, useParams } from "react-router-dom";
import Logout from "../../images/logout.png";
import { getUserById } from "../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contents from "./Contents";

const Dashboard = ({ logout }) => {
  const { Header, Sider, Content } = Layout;
  const navigate = useNavigate();
  // const ref = useRef(null);
  const [user, setUser] = useState({});
  const [option, setOption] = useState(1);

  const { id } = useParams();

  useEffect(async () => {
    try {
      const { data } = await getUserById(id);
      setUser(data);
    } catch (err) {
      toast("server die");
    }
  }, []);

  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
    // ref.current.onClick();
  };
  const handleMenu = (i) => {
    console.log(i);
  };
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("TodoList", "1", <UnorderedListOutlined />),
    getItem("Users", "2", <UserOutlined />),
    getItem("Charts", "sub1", <BarChartOutlined />, [
      getItem("LineChart", "3", <LineChartOutlined />),
      getItem("AreaChart", "4", <AreaChartOutlined />),
      getItem("HighCharts", "sub2", <DotChartOutlined />, [
        getItem("PieChart", "5", <PieChartOutlined />),
        getItem("RadarChart", "6", <RadarChartOutlined />),
      ]),
    ]),
  ];
  return (
    <Layout className="layout">
      <Sider collapsed={collapsed}>
        <div className="logo">
          <DashboardTwoTone />
          <h2 id="dashboard">DASHBOARD</h2>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={() => handleMenu(items)}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={toggle} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={toggle} />
          )}
          <div className="account">
            <h2>
              Hi, {user.first_name} {user.last_name}
            </h2>
            <div className="ava">
              <div className="ava-img">
                <img
                  onClick={() => navigate(`/view/${id}`)}
                  src="https://res.cloudinary.com/dn1b78bjj/image/upload/v1651370153/ProfileProject/female_iycsvy.jpg"
                />
                <button
                  className="logout"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  <span>Logout</span>
                  <img src={Logout} />
                </button>
              </div>
            </div>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Contents option={option} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
