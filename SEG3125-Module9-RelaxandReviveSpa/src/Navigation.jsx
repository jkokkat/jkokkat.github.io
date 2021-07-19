import React from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from './images/companylogo.png';
import Language from './images/languages.png';
// function Navigation(props) {
  function Navigation () {
   return (
    
      <nav className="navbar">
        <h3><img src={Logo}width="120" height="90"/>Relax and Revive Spa</h3>
        <div className="links">
          <a href="/home">Home </a>
          <a href="/about"> About</a>
          <a href="/services"> Services</a>
          <a href="/items"> Products</a>
          <a href="/contact">Contact</a>
          {/* <img id ="img" src={Language} width="40" height="40"/> */}
          <script type='text/javascript' src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit' />
          <div id="google_translate_element"></div>
        </div>
      </nav>  
  ); 

}

export default Navigation;