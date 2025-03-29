import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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

const Home = () => (
  <div className="text-center">
    <h2>Welcome to the Home Page</h2>
    <p>This is a simple React app with user profiles and settings.</p>
  </div>
);

const Profile = ({ user, setUser }) => {
  const handleChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  return (
    <div className="card p-4">
      <h2>Profile</h2>
      <ProfilePicture />
      <UserInfo name={user.name} />
      <label className="form-label">Name:</label>
      <input type="text" className="form-control mb-3" value={user.name} onChange={handleChange} />
      <button className="btn btn-primary">Update Profile</button>
    </div>
  );
};

const UserInfo = ({ name }) => (
  <div>
    <h3>User: {name}</h3>
    <p>This is your public display name.</p>
  </div>
);

const ProfilePicture = () => (
  <div className="rounded-circle bg-secondary d-flex justify-content-center align-items-center" style={{ width: 100, height: 100 }}>
    <span className="text-white">👤</span>
  </div>
);

const Settings = ({ toggleDarkMode, darkMode }) => (
  <div>
    <h2>Settings</h2>
    <p>Customize your preferences below:</p>
    <label className="form-check-label me-2">Dark Mode:</label>
    <input type="checkbox" className="form-check-input" checked={darkMode} onChange={toggleDarkMode} />
  </div>
);

export default App;
