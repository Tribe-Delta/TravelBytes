import React from "react";
import '../css/Header.css';
import { Link } from "react-router-dom";
import Profile from '../component/Profile';


class Header extends React.Component
{
render(){
  return (
    <>
    <div className="header-root">
      <div className="title-list">
        <h1 className ="header_h1">TravelBytes</h1>
        <ul className ="header_ul">
          <li className="header_li" >
            <Link to="/">Home</Link>
          </li>
          <li className="header_li">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
   
      <div className="profile-holder">
        <Profile />
      </div>
    </div>
    </>
  )
}
  

}

export default Header;