import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login.js'
import Logout from './Logout.js'
import Profile from './Profile.js'
// import Content from './Content.js';
import './css/App.css';
import {
  Routes, Route
} from "react-router-dom";
import Header from './Header.js';
import Footer from './Footer.js';
import About from './About.js';

class App extends React.Component {
  render() {
    return (
      <>
      <div className="App">
        <p>This is the page.</p>
        {this.props.auth0.isAuthenticated ? 
          <>
            <Profile />
            {/* <Content /> */}
            <Logout />
            <Header />
            <Routes>
              <Route exact path="/" element={<About />}></Route>  
              <Route exact path="about" element={<About />}></Route>  
        
           </Routes>
          </>
          :
          <Login />
        }
      </div>
      <Footer />
      </>
    );
  }
}

export default withAuth0(App);
