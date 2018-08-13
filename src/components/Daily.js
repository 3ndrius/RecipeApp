import React from 'react'
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
const Daily = () => {
  
    return (
        <div className="app">
        <Menu/>
        <Header header="DailyMenu"/>
        <h5> On this page will see a full daily menu (breakfast dinner supper etc..)</h5>
        <p> Page will be update soon! </p>
        <Footer/>
      </div>
    )
  
}
export default Daily;