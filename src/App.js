import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login.js'
import Logout from './Logout.js'
import Profile from './Profile.js'
import Content from './Content.js';
import './css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>This is the page.</p>
        {this.props.auth0.isAuthenticated ? 
          <>
            <Profile />
            {/* <Content /> */}
            <Logout />
          </>
          :
          <Login />
        }
      </div>
    );
  }
}

export default withAuth0(App);
