import React from 'react'
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
const Contact = () => {
  
    return (
        <div className="app">
        <Menu/>
        <Header header="Contact"/>
        <h5> Author : Aoprogrammer</h5>
        <p> Project api: http://food2fork.com/api/ </p>
        <a href="https://github.com/3ndrius/RecipeApp"> All code you can find on my GitHub</a>
        <p> Enjoy !! </p>
        
        <Footer/>
      </div>
    )
  
}
export default Contact;