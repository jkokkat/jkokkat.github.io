import '../css/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Services from './Services';
import Items from './Items';
import Contact from './Contact';
import { useState } from 'react';
import { language_data } from '../data/language';
import {items} from "../data/products";

function App() {

    const[lang, setLang] = useState("english");
  
    const languageChange = (e)=>{    
      setLang(e.target.value);
    }
    return (      
      <div>
        <Router>
        <div className="App">
        <NavBar othrTxt = {language_data} propLangChange = {languageChange} propLang = {lang}/>
  
          <div className="content">
            <Switch>
            <Route  exact path="/">
                <Home othrTxt={language_data} propLang ={lang}/>
            </Route>
            <Route  path="/services">
              <Courts othrTxt = {language_data} propCourts = {services} propLang ={lang}/>
            </Route>
            <Route path="/contact">
              <Register othrTxt={language_data} propTeam = {experts} propServices = {courts} propCourses={courses} propLang ={lang}/> 
            </Route>
            <Route path="/items">
              <Items   othrTxt={language_data} propItems = {items} propLang = {lang}></Items>
            </Route>
            <Route path="/about">
              <About propTeam = {experts} othrTxt={language_data}  propLang = {lang}></About>
            </Route>
            </Switch>
            <Route path="/about">
              <About othrTxt={language_data}  propLang = {lang}></About>
            </Route>
          </div>
        </div>
      </Router>
      </div>
      
    );
 } 
 export default App;