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
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Contents from "./Contents";
import { Link } from "react-router-dom";
import "../TodoList/TodoList.css"
import { Footer } from "antd/lib/layout/layout";

const Dashboard = ({ logout }) => {
  const { Header, Sider, Content } = Layout;
  // const { SubMenu } = Menu;
  const navigate = useNavigate();
  useEffect(() => {
    const o = localStorage.getItem("option");
    o && JSON.parse(o) ? setOption(options) : setOption(1);
  }, []);

  const options = JSON.parse(localStorage.getItem("option"));

  // option 1 == todoList ; option 2 == list users; option 3 == view account; option4 == edit account; option5 == create user
  // option 6 == user details ; option7 == todolist of user
  const [option, setOption] = useState(options);

  // get data user
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    localStorage.setItem("option", option);
  }, [option]);

  let switchText = "switchText";
  let switcher = "";
  let dashboardName = "";
  // let charts = "";

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
    // charts = "charts dark";
  } else {
    switchText -= " dark";
    // charts = "light charts";
  }

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  console.log(option);
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
          <Menu.Item
            key="2"
            onClick={() => setOption(2)}
            disabled={user && user.role === "user"}
          >
            <Link to="/users" style={{ textDecoration: "none" }}>
              <UserOutlined />
              <span>Users</span>
            </Link>
          </Menu.Item>
          {/* <SubMenu
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
          </SubMenu> */}
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
                  onClick={() => {
                    setOption(3);
                    navigate(`/account`, { option: 4 });
                  }}
                  src={user && user.avatar}
                />
                <button
                  className="logout"
                  onClick={() => {
                    logout();
                    navigate(`/`);
                  }}
                >
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </Header>
        {/* <TodoList /> */}

        <Content
          className="site-layout-background"
          style={{
            // margin: "24px 16px",
            padding: "20px",
            backgroundColor: "#FAFAFA",
            minHeight: 280,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <Contents option={option} /> */}
          <Contents option={option} onOptionChange={setOption} />
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
