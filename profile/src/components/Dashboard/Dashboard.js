import React, { useEffect, useState } from "react";
import { Layout, Menu, Switch } from "antd";
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
import { getUserById } from "../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contents from "./Contents";
import { Link } from "react-router-dom";
import { Footer } from "antd/lib/layout/layout";

const Dashboard = ({ logout }) => {
  const { Header, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  const navigate = useNavigate();
  // const [user, setUser] = useState({});

  // option 1 == todoList ; option 2 == list users
  const [option, setOption] = useState(1);

  // get data user
  const user = JSON.parse(localStorage.getItem("user"));

  let switchText = "switchText";
  let switcher = "";
  let dashboardName = "";
  let charts = "";

  // useEffect(async () => {
  //   try {
  //     const { data } = await getUserById(user.id);
  //   } catch (err) {
  //     toast("server die");
  //   }
  // }, []);

  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  if (collapsed) {
    console.log(collapsed);
    switchText += " collapsed";
    switcher += " collapsed";
    dashboardName += " collapsed";
  } else {
    switchText -= " collapsed";
    switcher -= " collapsed";
    dashboardName -= " collapsed";
  }

  const [theme, setTheme] = useState("dark");

  if (theme == "dark") {
    switchText += " dark";
    charts = "charts dark";
  } else {
    switchText -= " dark";
    charts = "light charts";
  }
  console.log(charts);
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <Layout className="layout">
      <Sider collapsed={collapsed} theme={theme}>
        <div className="logo">
          <DashboardTwoTone />
          <h2 className={dashboardName}>DASHBOARD</h2>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme={theme}
          className="menu-sidebar"
        >
          <Menu.Item key="1" onClick={() => setOption(1)}>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <UnorderedListOutlined />
              <span>TodoList</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => setOption(2)}>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <UserOutlined />
              <span>Users</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            mode="inline"
            theme={theme}
            title={
              <Link to="" style={{ textDecoration: "none" }} className={charts}>
                <div className={charts}>
                  <BarChartOutlined />
                  <span>Charts</span>
                </div>
              </Link>
            }
          >
            <Menu.Item key="3">
              <Link to="" style={{ textDecoration: "none" }}>
                <LineChartOutlined />
                <span>LineChart</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="" style={{ textDecoration: "none" }}>
                <AreaChartOutlined />
                <span>AreaChart</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub2"
              mode="inline"
              theme={theme}
              title={
                <Link to="" style={{ textDecoration: "none" }}>
                  <div className={charts}>
                    <DotChartOutlined />
                    <span>HighCharts</span>
                  </div>
                </Link>
              }
            >
              <Menu.Item key="5">
                <Link to="" style={{ textDecoration: "none" }}>
                  <PieChartOutlined />
                  <span>PieChart</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="" style={{ textDecoration: "none" }}>
                  <RadarChartOutlined />
                  <span>RadarChart</span>
                </Link>
              </Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
        <div className="switch-theme">
          <span className={switchText}>Switch theme</span>
          <div className={switcher}>
            <Switch
              checked={theme === "dark"}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div>
        </div>
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
              Hi, {user && user.first_name} {user && user.last_name}
            </h2>
            <div className="ava">
              <div className="ava-img">
                <img
                  // onClick={() => navigate(`/view/${id}`)}
                  onClick={() => navigate(`/account`)}
                  src={user && user.avatar}
                />
                <button
                  className="logout"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  <span>Logout</span>
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
        <Footer className="ft">
          <div className="copyright">
            <p>Copyright &copy; 2022</p>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
