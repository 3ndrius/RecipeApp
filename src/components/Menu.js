import React, { Component } from 'react'


const Menu = () => {
    return (
      <div className="navbar">
          <div className="logo"> <img src="/logo.jpg" alt="logo"/>  <h2>Gratia</h2></div>
          <ul className="nav">
            <li className="item">About</li>
            <li className="item">Menu</li>
            <li className="item">Gallery</li>
            <li className="item">Contact</li>
          </ul>
      </div>
    )
}
export default Menu;