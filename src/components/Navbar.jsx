import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div id='title'>
        <h2>PortugalParadise</h2>
      </div>
      <div className='NavBtn'>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/about-portugal'>
          <button>About Portugal</button>
        </Link>
        <Link to='/popular-cities'>
          <button>Popular Cities</button>
        </Link>

        <Link to='/popular-restaurants'>
          <button>Popular Restaurants</button>
        </Link>

        <Link to='/add-your-place'>
          <button>AddYourPlace</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
