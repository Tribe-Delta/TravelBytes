import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './component/Login.js'
import Logout from './component/Logout.js'
import Profile from './component/Profile.js'
import SavedLocations from './component/SavedLocations.js';
import Map from './component/Map.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>This is the page.</p>
        {this.props.auth0.isAuthenticated ? 
          <>
            <Profile />
            <Logout />
            <Map />
            
            <SavedLocations />
          </>
          :
          <Login />
        }

      </div>
    );
  }
}

export default withAuth0(App);
