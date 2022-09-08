import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './component/Login.js'

// import SavedLocations from './component/SavedLocations.js';
import Map from './component/Map.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { Route, Routes } from "react-router-dom";
import About from './component/About.js';
import Header from './component/Header.js';
import PlaceCard from './component/PlaceCard.js';
import Footer from './component/Footer.js';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.auth0.isAuthenticated ? 
          <>
            <Header />
            <Routes>
              <Route path="/about" element={<About className="test-test" />} />
              <Route path="/" element={
                <>
               
                
                <Map />
                <PlaceCard />
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
