import React from "react";

import { Link } from "react-router-dom"

class Header extends React.Component
{
render(){
  return (
    <>
    <h1>Hi, I'm a header</h1>
    <Link to="/">Home</Link>
    <br />
    <Link to="/about">About</Link>
    </>
  )
}
  

}

export default Header;