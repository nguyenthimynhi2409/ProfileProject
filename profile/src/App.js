import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Edit from "./components/Edit/Edit";
import ViewProfile from "./components/ViewProfile/ViewProfile";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit:id" element={<Edit />} />
        <Route path="/view/:id" element={<ViewProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
