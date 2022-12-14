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
import NotesModal from './component/NotesModal.js'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      showNotesModal: false
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

  handleUpdateNote = async(event, noteLocation) => {
    event.preventDefault();
    try{
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        
        let packet = {
          city: noteLocation.city,
          notes: event.target.elements.updateNoteControl.value
        }
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'PUT',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/location/${noteLocation._id}`,
          data: packet
        }
        
        await axios(config);
        
        this.handleNotesModal(true);

        this.getSavedLocations();
      }
    } catch(error) {
      console.log("There was an error inside handleUpdateNote")
    }
  }

  handleLocationDelete = async (locationToDelete) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;

        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'DELETE',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/location/${locationToDelete._id}`
        }
        
        await axios(config);
        
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

  handleNotesModal = (showModal) => {
    this.setState({
      showNotesModal: showModal
    });
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
            <NotesModal 
              showNotesModal={this.state.showNotesModal} 
              handleNotesModal={this.handleNotesModal}
            />
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
