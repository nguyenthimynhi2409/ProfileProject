import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Edit from "./components/Edit/Edit";
import ViewProfile from "./components/ViewProfile/ViewProfile";
import React, { useEffect, useState } from "react";
import UserDetails from "./components/Users/UserDetails";

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
                    setIsLogin(false);
                    setUser(null);
                    localStorage.clear();
                  }}
                />
              }
            />
            <Route
              path="/users"
              element={
                <Dashboard
                  user = {user}
                  logout={() => {
                    setUser(null);
                    localStorage.clear();
                  }}
                />
              }
            />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route
              path="/account"
              element={
                <Dashboard
                  logout={() => {
                    setUser(null);
                    localStorage.clear();
                  }}
                />
              }
            />
            <Route path="/account/update" element={<Edit />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
