import '../css/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Services from './Services';
import Products from './Products';
import Contact from './Contact';
import { useState } from 'react';
import { user_testimonials } from "../data/people";
import { language_data } from '../data/language';

function App() {

    const[lang, setLang] = useState("english");
  
    const languageChange = (e)=>{    
      setLang(e.target.value);
    }

 } 
 export default App;