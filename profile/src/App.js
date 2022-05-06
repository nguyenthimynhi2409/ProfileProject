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
                />
              }
            />
            <Route
              path="/user/todo/:id"
              element={
                <Dashboard
                  logout={() => {
                    localStorage.clear();
                    setIsLogin(false);
                  }}
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
