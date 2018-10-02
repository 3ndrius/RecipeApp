import React from 'react'
import { Link} from 'react-router-dom';
const Menu = () => {
    return ( 
    <div className="wrap-nav" > 
        <div className="navbar">
           <Link to="/"> <div className="logo"> <img src="/logo.jpg" alt="logo"/>  <h2>Gratia</h2></div> </Link>
            <ul className="nav">
            <Link to="/about"><li className="item">About</li></Link> 
            <Link to="/daily-menu"><li className="item">DailyMenu</li></Link>
            <Link to="/contact"> <li className="item">Contact</li></Link>        
          </ul>
      </div>
    </div> 
    )
}
export default Menu;

