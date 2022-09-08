import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login.js'
import Logout from './Logout.js'
import Profile from './Profile.js'
import SearchFrom from './component/SearchForm.js'
import Map from './component/Map.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { Route, Routes } from "react-router-dom";
import About from './component/About.js';
import Header from './component/Header.js';
import './css/App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    lng: -122.330062, 
    lat: 47.603832,
    zoom: 9
    };

    this.mapContainer = React.createRef();
  }

  handleLatLng(lat, lng){
    this.setState = {
      lng: lng,
      lat: lat,
    }
  }

  render() {
    return (
      <div className="App">
        {/* <p>This is the page.</p> */}
        {this.props.auth0.isAuthenticated ? 
          <>
            <Header />
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={
                <>
                <Profile />
                <Logout />
                <SearchFrom handleLatLng={this.handleLatLng}/>
                <Map lat={this.state.lat} lon={this.state.lng}/>
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
