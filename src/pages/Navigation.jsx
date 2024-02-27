import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
// import {faBars} from 'react-icons/fa';

const Navigation = () => {
  const title = "Dess Technologies"; 
  return (
  <div className='nav'>
      <a href='/Home' className='site-title'><h3>{title}</h3></a>
     <div>
        <ul>
          <li>
            <a href='/Home'>Home</a>
          </li>
    
          <li>
            <a href='/Products' >Products</a>
          </li>

          <li>
            <a href='/About' >About</a>
          </li>

          <li>
            <a href='/Contact'>Contact</a>
          </li>
        </ul>
      </div>
      <div className='hamburger-menu'>
          
      </div>
  </div>
    
  );
};

export default Navigation;
