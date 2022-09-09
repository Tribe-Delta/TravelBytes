import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './component/Login.js'
import Map from './component/Map.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { Route, Routes } from "react-router-dom";
import About from './component/About.js';
import Header from './component/Header.js';
import PlaceCard from './component/PlaceCard.js';
import Footer from './component/Footer.js';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: []
    }
  }

 async componentDidMount(){
   setTimeout(() => {
      this.getSavedLocations();
    }, 2000);
  }

 getSavedLocations = async() => {
    if(this.props.auth0.isAuthenticated){
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/location',
      }
      
      const locationResponse = await axios(config);

      this.setState({
        locations: locationResponse.data
      });
    }
  }

  handleUpdateNote = async() => {
    try {
      // console.log(event.target);
      
      // console.log('you are in the update function?');
      // // console.log(noteToUpdate._id)
      // if(this.props.auth0.isAuthenticated){
      //   const res = await this.props.auth0.getIdTokenClaims();
      //   const jwt = res.__raw;
  
      //   let testPacket = {
      //     city: updatedNote.city,
      //     notes: event.target.value
      //   }
  
      //   const config = {
      //     headers: { "Authorization": `Bearer ${jwt}` },
      //     method: 'PUT',
      //     baseURL: process.env.REACT_APP_SERVER,
      //     url: `/location/${updatedNote._id}`
      //   }
      //   console.log('+++++++++++++++');
      //   console.log(updatedNote);
        
      //   const locationResponse = await axios(config);
       
      //   console.log(locationResponse.status);
      
      //   let updatedLocationArray = this.state.locations.map(existingLocation => {
      //     return existingLocation._id === updatedNote._id
      //     ? locationResponse.data
      //     : existingLocation
      //   });

      //   this.setState({
      //     locations: updatedLocationArray
      //   });

      //   this.getSavedLocations();
      // } 
    }catch(error){
      console.log('error in updateLocation', error.response);
    }
  }

  handleLocationDelete = async (locationToDelete) => {
    // console.log('you are in the delete function?');
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        
        // let testPacket = {
        //   id: locationToDelete._id
        // }
        // console.log(testPacket.id);
        
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'DELETE',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/location/${locationToDelete._id}`
         
        }
        
        console.log('you are leaving the delete function then');
        const locationResponse = await axios(config);
        
        console.log(locationResponse.status);
        
        const filteredLocations = this.state.locations.filter(location => {
          return location._id !== locationToDelete._id;
        })
        
        this.setState({
          locations: filteredLocations
        })

        this.getSavedLocations();
      }

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let mapLocations = this.state.locations.map((location) => (

      <PlaceCard 
        key={location._id}
        location={location}
        handleLocationDelete={this.handleLocationDelete}
        handleUpdateNote={this.handleUpdateNote}
      />
    ));
    return (
      <div className="App">
        {this.props.auth0.isAuthenticated ?
          <>
            <Header />
            <Routes>
              <Route path="/about" element={<About className="test-test" />} />
              <Route path="/" element={
                <>
                  <Map getSavedLocations={this.getSavedLocations}/>

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
      <Footer />
      </div>
    );
  }
}

export default withAuth0(App);
