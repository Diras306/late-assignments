import React from "react";

const Settings = ({ toggleDarkMode, darkMode }) => (
  <div>
    <h2>Settings</h2>
    <p>Customize your preferences below:</p>
    <label className="form-check-label me-2">Dark Mode:</label>
    <input type="checkbox" className="form-check-input" checked={darkMode} onChange={toggleDarkMode} />
  </div>
);

export default Settings;
