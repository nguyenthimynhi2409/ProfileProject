import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Edit from "./components/Edit/Edit";
import ViewProfile from "./components/ViewProfile/ViewProfile";
import Footer from "./components/Layout/Footer/Footer";
import React, { useEffect, useState } from "react";

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
              path="/view/:id"
              element={
                <ViewProfile
                  logout={() => {
                    localStorage.clear();
                    window.location.href = "/";
                    setUser(false);
                  }}
                />
              }
            />
            <Route path="/edit/:id" element={<Edit />} />
          </>
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
