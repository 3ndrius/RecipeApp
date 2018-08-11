import React from 'react'

 const Header = (props) => {

    return (
      <div id="header">
     
    <h1> {props.header} </h1>
    <p>Type in search box your favourite food and click search. </p>

      </div>
    )
 
};
export default Header;