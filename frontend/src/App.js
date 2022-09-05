import React from 'react';
import Login from './Login.js'
import Logout from './Logout.js'
import Profile from './Profile.js';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <p>This is the page.</p>
      <Login />
      <Logout />
      <Profile />
    </div>
  );
}

export default App;
