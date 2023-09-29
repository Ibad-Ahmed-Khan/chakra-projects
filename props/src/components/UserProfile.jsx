import React from "react";

const UserProfile = ({ users }) => {
  return (
    <div className="UserProfile">
      <p>
        {users.map((item) => {
          return (
            <div className="test">
              <div className="one">{item.id}</div>
              <div className="two">{item.username}</div>
              <div className="three">{item.email}</div>
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default UserProfile;
