import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center">
      <h1>Welcome to the React App!</h1>
      <Link to="/profile" className="btn btn-primary m-2">Go to Profile</Link>
      <Link to="/settings" className="btn btn-secondary m-2">Go to Settings</Link>
    </div>
  );
};

export default Home;
