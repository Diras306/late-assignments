import React from "react";

const Settings = ({ user, toggleDarkMode }) => {
  return (
    <div className="container">
      <h2>Settings</h2>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={user.settings.darkMode}
          onChange={toggleDarkMode}
        />
        <label className="form-check-label">Dark Mode</label>
      </div>
    </div>
  );
};

export default Settings;
