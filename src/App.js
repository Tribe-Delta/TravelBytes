import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './component/Login.js'
import Logout from './component/Logout.js'
import Profile from './component/Profile.js'
import SavedLocations from './component/SavedLocations.js';
import Map from './component/Map.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { Route, Routes } from "react-router-dom";
import About from './component/About.js';
import Header from './component/Header.js';
import './css/App.css';
// import Flag from './component/Flag.js';
// import RenderMap from './component/RenderMap.js';
// import LocationList from './component/LocationList.js';
import PlaceCard from './component/PlaceCard.js';
// import TextArea from './component/TextArea.js';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.auth0.isAuthenticated ? 
          <>
            <Header />
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={
                <>
                <Profile />
                <Logout />
                <Map />
                <SavedLocations />
                <PlaceCard />
                </>
              }/>
            </Routes>
          </>
          :
          <Login />
        }
      </div>
    );
  }
}

export default withAuth0(App);
