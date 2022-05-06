import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("isLogin");
    login && JSON.parse(login) ? setIsLogin(true) : setIsLogin(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        {!isLogin && (
          <Route path="/" element={<Login auth={() => setIsLogin(true)} />} />
        )}
        {isLogin && (
          <>
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  logout={() => {
                    localStorage.clear();
                    setIsLogin(false);
                  }}
                  option={1}
                />
              }
            />
            <Route
              path="/users"
              element={
                <Dashboard
                  user={user}
                  logout={() => {
                    localStorage.clear();
                    setIsLogin(false);
                  }}
                  option={2}
                />
              }
            />
            <Route
              path="/user/:id"
              element={
                <Dashboard
                  logout={() => {
                    localStorage.clear();
                    setIsLogin(false);
                  }}
                  option={6}
                />
              }
            />
            <Route
              path="/account"
              element={
                <Dashboard
                  logout={() => {
                    localStorage.clear();
                    setIsLogin(false);
                  }}
                  option={3}
                />
              }
            />
            <Route
              path="/account/update"
              element={
                <Dashboard
                  logout={() => {
                    localStorage.clear();
                    setIsLogin(false);
                  }}
                  option={4}
                />
              }
            />
            <Route
              path="/user/new"
              element={
                <Dashboard
                  logout={() => {
                    localStorage.clear();
                    setIsLogin(false);
                  }}
                  option={5}
                />
              }
            />
            <Route
              path="/todo/:id"
              element={
                <Dashboard
                  logout={() => {
                    localStorage.clear();
                    setIsLogin(false);
                  }}
                  option={7}
                />
              }
            />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
