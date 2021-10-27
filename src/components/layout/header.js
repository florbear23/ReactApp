import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <header style={headerStyle}> 
      <h1> Mga Listahan </h1>
      <Link to="/ReactApp" style={LinkStyle}>Home</Link> | <Link to="/about"  style={LinkStyle}>About</Link>
    </header>
 );
}

 const headerStyle = {
    background:" radial-gradient(#3996cd 44%, #4b3fc5 100%)",
     color:"#fff",
     textAlign:"center",
     padding:"10px",
 }

 const LinkStyle = {
   color:"white",
   textDecoration:"none",
   paddingTop:"30px"
 }

export default Header;