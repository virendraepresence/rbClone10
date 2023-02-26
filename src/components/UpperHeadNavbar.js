import React from "react";
import {Link} from 'react-router-dom';

function UpperHeadNavbar(){
    return (
        <nav className="navbar navbar-dark bg-dark d-block pb-5">
          <Link to="/"><h1>AirBus</h1></Link>
          <div className="upperLinks"> 
          
            <Link to="/">Careers</Link>
            <Link to="/">Investor</Link>
            
            <Link to="/">Suppliers</Link>
            <Link to="/">Newsroom</Link>
  
            <Link to="/Safety">Airbus</Link>

          </div>
        </nav>
      );
}

export default UpperHeadNavbar;

