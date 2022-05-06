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

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(user) : setUser(null);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        {user == undefined && (
          <Route
            path="/"
            element={<Login auth={(userData) => setUser(userData)} />}
          />
        )}
        {user && (
          <>
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  logout={() => {
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
            <Route
              path="/users/:id"
              element={<UserDetails />}
            />
            <Route path="/account/:id" element={<ViewProfile />} />
            <Route path="/account/update" element={<Edit />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
