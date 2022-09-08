import React from "react";
import '../css/Header.css';
import { Link } from "react-router-dom";

class Header extends React.Component
{
render(){
  return (
    <>
    <h1 class ="header_h1">TravelBytes</h1>
    <ul class ="header_ul">
      <li class="header_li" >
        <Link to="/">Home</Link>
      </li>
      <li class="header_li">
        <Link to="/about">About</Link>
      </li>
    </ul>
    </>
  )
}
  

}

export default Header;