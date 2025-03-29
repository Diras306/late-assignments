import React, { useState } from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

const Profile = ({ user }) => {
  const [name, setName] = useState(user.name);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="container">
      <h2>Profile</h2>
      <ProfilePicture />
      <div className="mt-3">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <UserInfo name={name} />
    </div>
  );
};

export default Profile;
