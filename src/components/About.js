import React from 'react'
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';

const About = () => {
    return (
      <div className="app">
        <Menu/>
        <Header header="ABOUT"/>
          <p> This is a page using ReactJS</p>
          <p> Using fetch to take a data from api </p>
          <p> Prototype layout form ..</p>
        <Footer/>
      </div>
    )
}
export default About;
