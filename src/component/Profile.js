import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import '../css/Profile.css';
import Logout from '../component/Logout';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-container">
        <h2>{user.name}
          <img className="user_photo" src={user.picture} alt={user.name} />
        </h2>
        <p>{user.email}</p>
        <Logout />
      </div>
    )
  );
};

export default Profile;