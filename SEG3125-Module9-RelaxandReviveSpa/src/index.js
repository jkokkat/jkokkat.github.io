//import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import ServicesCheck from './services';
import reportWebVitals from './reportWebVitals';
import {render} from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { HashRouter } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
//import { Carousel } from 'react-bootstrap';
export { default as Navigation } from "./Navigation";
export { default as Footer } from "./Footer";
export { default as Home } from "./Home";
export { default as About } from "./About";
export {default as Services} from "./Services";
//export {default as Items} from "./Items";
export {default as Contact} from "./Contact";
// Importing the Bootstrap CSS
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App />, document.getElementById("root"));
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
      <App />
      </HashRouter>
  </React.StrictMode>,
    document.getElementById('root')
  ); 
/* ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
); */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
