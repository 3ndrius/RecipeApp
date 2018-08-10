import React, { Component } from 'react'
import logo from '../';
const Menu = () => {
    return (
      <div>
          <div className="logo"> <img src="/public/logo.jpg" alt="logo"/></div>
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