import React from "react";
import '../css/Header.css';
import { Link } from "react-router-dom";

class Header extends React.Component
{
render(){
  return (
    <>
    <h1 className ="header_h1">TravelBytes</h1>
    <ul className ="header_ul">
      <li className="header_li" >
        <Link to="/">Home</Link>
      </li>
      <li className="header_li">
        <Link to="/about">About</Link>
      </li>
    </ul>
    </>
  )
}
  

}

export default Header;