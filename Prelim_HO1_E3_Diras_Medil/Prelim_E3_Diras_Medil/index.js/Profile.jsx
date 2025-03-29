import React from "react";
import ProfilePicture from "./ProfilePicture";
import UserInfo from "./UserInfo";

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

export default Profile;
