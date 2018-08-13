import React from 'react'
import { Link} from 'react-router-dom';




const Menu = () => {
    return (
     
    <div className="wrap-nav" > 
  <div className="navbar">
          <div className="logo"> <img src="/logo.jpg" alt="logo"/>  <h2>Gratia</h2></div>
          <ul className="nav">
             <Link to="/about"><li className="item">About</li></Link> 
            <li className="item">Menu</li>
            <Link to="/contact"> <li className="item">Contact</li></Link>
           
          </ul>
      </div>
    </div>
   
    )
}
export default Menu;

