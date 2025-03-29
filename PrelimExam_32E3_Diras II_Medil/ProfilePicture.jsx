import React from "react";

const ProfilePicture = ({ imgUrl }) => {
  return (
    <div className="profile-picture">
      <img
        src={imgUrl || "https://via.placeholder.com/150"}
        alt="Profile"
        className="rounded-circle"
        width="150"
        height="150"
      />
    </div>
  );
};

export default ProfilePicture;
