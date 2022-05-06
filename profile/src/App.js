import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import React, { useEffect, useState } from "react";
import NotFound from "./components/NotFound/NotFound";

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

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <Login
              auth={(u) => {
                setUser(u);
                setIsLogin(true);
              }}
              isLogin={isLogin}
            />
          }
        />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
