import React from 'react'
import { Link } from 'react-router-dom';

import About from './About';


const Menu = () => {
    return (
    <div className="wrap-nav" > 
  <div className="navbar">
          <div className="logo"> <img src="/logo.jpg" alt="logo"/>  <h2>Gratia</h2></div>
          <ul className="nav">
        
            <Link to="/about" component={About}><li className="item">About</li></Link>
            <li className="item">Menu</li>
            <li className="item">Contact</li>
           
          </ul>
      </div>
    </div>
    )
}
export default Menu;

