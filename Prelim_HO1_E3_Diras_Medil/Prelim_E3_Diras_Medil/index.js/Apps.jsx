import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

const App = () => {
  const [user, setUser] = useState({
    name: "Medil A. Diras II",
    settings: { darkMode: false },
  });

  const toggleDarkMode = () => {
    setUser((prevUser) => ({
      ...prevUser,
      settings: { darkMode: !prevUser.settings.darkMode },
    }));
  };

  return (
    <Router>
      <div className={user.settings.darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/">Home</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/settings">Settings</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
            <Route path="/settings" element={<Settings toggleDarkMode={toggleDarkMode} darkMode={user.settings.darkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
