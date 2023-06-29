import React, { useEffect, useRef } from 'react';
import './App.css'
import RateCalc from './assets/img/ratecalc.jpg'
import logos from './assets/img/logos.png'
import illustration from './assets/img/ill_header.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PreLoader from './components/PreLoader';
import Navbar from './components/Navbar';
import RateCalculator from './components/RateCalculator';
import FloatingButton from './components/FloatingButton';
import HeaderSection from './components/HeaderSection';
import FAQSection from './components/Faqs';
import Section from './components/Love';
import Footer from './components/Footer';
import BlogSection from './components/Blog';
import Contact from './components/Contact';
import CTA from './components/CTA';
import CardDeal from './components/CardDeal';
import Business from './components/Business';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import styles from './style';
import TidioChat from './components/TidioWidget';
import { Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './Router';


const App = () => {
  return (
    <div className="App">
      <Routes>
      {AppRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
      </Routes>
     </div> 
 );
};
  

export default App;
