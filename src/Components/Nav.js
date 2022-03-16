import React from 'react';
import {Link} from 'react-router-dom';

import '../App.css';

function Nav() {

    const navStyle ={
        color:'white'
    }

  return (
    <nav>
      <Link style={navStyle} to="/">
        <h3><li>logo</li></h3>
        </Link>
        <ul className="nav-links">
            <Link style={navStyle} to="/student">
            <li>Student</li>
            </Link>
            <Link style={navStyle} to="/book">
            <li>Book</li>
            </Link>
        </ul>
        
    </nav>
  );
}

export default Nav;
