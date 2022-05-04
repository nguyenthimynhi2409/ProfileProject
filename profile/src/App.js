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
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        {!user && (
          <Route path="/" element={<Login auth={() => setUser(true)} />} />
        )}
        {user && (
          <>
            <Route
              path="/dashboard/:id"
              element={
                <Dashboard
                  logout={() => {
                    setUser(false);
                    localStorage.clear();
                  }}
                />
              }
            />
            <Route path="/todolist" element={<Dashboard />} />
            <Route path="/users" element={<Dashboard />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/view/:id" element={<ViewProfile />} />
            <Route path="/edit/:id" element={<Edit />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
