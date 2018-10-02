import React from 'react'
const Header = (props) => {
  return (
   <div id="header">
     <h1> {props.header} </h1>
     <p>{props.tips} </p>
    </div>
    ) 
};
export default Header;
