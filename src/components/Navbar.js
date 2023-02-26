import React from 'react';
import {Link} from 'react-router-dom';



const Navbar = () => {
    return (
      <>
      
      <nav className="navbar navbar-expand-sm fixed-top">
        <Link to="/"><h1>AirBus</h1></Link>
        <div className="links"> 
        
          <Link to="/WhoWeAre">Who We Are</Link>
          <Link to="/WhatWeDo">What We Do</Link>
          
          <Link to="/Innovation">Innovation</Link>
          <Link to="/Sustainability">Sustainability</Link>

          <Link to="/Safety">Safety</Link>
          <Link to="/ProductsAndServices">Product And Services</Link>
          <a class="search">
            Search
        </a>
        </div>
      </nav>
  
      </>
    );
  }
   
  export default Navbar;