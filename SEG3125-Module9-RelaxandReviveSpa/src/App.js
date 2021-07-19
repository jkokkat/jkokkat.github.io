import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Products from './Products';
import Services from './Services';
import Contact from './Contact';
//import Items from './Items';
import ReactDOM from 'react-dom';
import image1 from './images/background.jpeg';
import image2 from './images/hairslide.jpeg';
import image3 from './images/facialslide.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import { Container } from './Container';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/services" exact component={() => <Services />} />
          <Route path="/items" exact component={() => <Products/>} />
          <Route path="/contact" exact component={() => <Contact/>} />
          <Carousel autoPlay showThumbs={false}>
                  <div>
                      { <img src={image1 }width="300" height="700" /> }
                  </div>
                  <div>
                  { <img src={image2 }width="300" height="700" /> }
                  </div>
                  <div>
                  { <img src={image3 }width="300" height="700" /> }
                  </div>
              </Carousel>
              
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" href="#" >Book now</button> 
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <img src="./assets/icons/scissors.svg" alt="Logo" style="width: 35px; margin-right: 0.5rem;"></img>
                <h5 class="modal-title" id="exampleModalLabel">Relax and Revive Spa</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <script type='text/javascript' src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit' />
                <div id="google_translate_element"></div>
                </div>
                </div>
                </div>
            </div>
          { <Route path="/contact" exact component={() => <Contact />} />}
        </Switch>
        <Footer />
      </Router>
    </div>
     

  
  
  
  );
}

export default App;