import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './component/Login.js'
import Logout from './component/Logout.js'
import Profile from './component/Profile.js'
import Map from './component/Map.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { Route, Routes } from "react-router-dom";
import About from './component/About.js';
import Header from './component/Header.js';
import './css/App.css';
import PlaceCard from './component/PlaceCard.js';
import axios from 'axios';


handleLocationDelete = async (locationToDelete) => {
  try {
    if(this.props.auth0.isAuthenticated){
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      let testPacket = {
        id: this.props._id
      }

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'DELETE',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/location',
        data: testPacket
      }
      
      const locationResponse = await axios(config);
     
      console.log(locationResponse.status);

      const filteredLocations = this.state.locations.filter(location => {
        return location._id !== locationToDelete._id;
      })

      this.setState({
        locations: filteredLocations
      })      
    }

  } catch (error) {
    console.log(error);
  }
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      locations: []
    }
  }

  componentDidMount(){
    this.getSavedLocations();
  }

  async getSavedLocations() {
    
    if(this.props.auth0.isAuthenticated){
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      //Use this to get token for thunderclient
      //console.log('token for thunderclient: ', jwt);

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/location',
      }
      
      const locationResponse = await axios(config);

      console.log('Response: ', locationResponse.data);

      this.setState({
        locations: locationResponse.data
      });
    }
  }

  render() {
    let mapLocations = this.state.locations.map((location) => (
      <PlaceCard 
        location={this.state.location}
        handleDelete={this.handleDelete}
        updateLocations={this.updateLocations}
      />
    ));
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
                  <br/>
                  <br/>
                  <Map />
                  {this.state.locations.length ? (
                    <div className="location-cnt">
                      {mapLocations}
                    </div>
                  ) : (
                    <h3>No Saved Locations</h3>
                  )}
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
