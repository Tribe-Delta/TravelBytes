import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import '../css/Logout.css';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button class="logout" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;