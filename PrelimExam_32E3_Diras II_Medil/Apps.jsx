import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    settings: {
      darkMode: false
    }
  });

  const toggleDarkMode = () => {
    setUser((prevUser) => ({
      ...prevUser,
      settings: {
        ...prevUser.settings,
        darkMode: !prevUser.settings.darkMode
      }
    }));
  };

  return (
    <Router>
      <div className={user.settings.darkMode ? "bg-dark text-white" : "bg-light"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/settings" element={<Settings user={user} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
