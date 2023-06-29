import React from 'react';
import RateCalc from '../assets/img/ratecalc.jpg'
import logos from '../assets/img/logos.png'
import illustration from '../assets/img/ill_header.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PreLoader from './PreLoader';
import Navbar from './Navbar';
import RateCalculator from './RateCalculator';
import FloatingButton from './FloatingButton';
import HeaderSection from './HeaderSection';
import FAQSection from './Faqs';
import Section from './Love';
import Footer from './Footer';
import BlogSection from './Blog';
import Contact from './Contact';
import CTA from './CTA';
import CardDeal from './CardDeal';
import Business from './Business';
import Clients from './Clients';
import Testimonials from './Testimonials';
import Stats from './Stats';
import styles from '../style';
import TidioChat from './TidioWidget';
import Popup from './Popup';

const Home = () => {
  return (
    <div id='home' className='mainpage'>
      {/* <Popup /> */}
<PreLoader />
      <Navbar />
      <div className={`${styles.padding} p-20`}>
      <HeaderSection />
      </div>
      
    <div className={` ${styles.padding} ${styles.flexCenter} p-10`}>
      <div className={`${styles.boxWidth} p-20`}>
      <Stats />
      </div>
      </div>
      <div>
      <Business />
      </div>


      <RateCalculator />

      <FAQSection />
      <FloatingButton />
      <Section />
     <Testimonials />
     <div className='bg-blueGray-200 py-20'>
     <BlogSection />
     </div>


      <Contact />
      <TidioChat />
      {/* <CTA /> */}
      <Footer />

    </div>
  )
}

export default Home
