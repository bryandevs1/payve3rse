import React from 'react';
import Header from './Navbar';
import logos from '../assets/img/logos.png'
import Footer from './Footer';
import styled from 'styled-components';



const Layout = ({ children }) => (
  <>
    <Header logos={logos}/>
    {children}
    <div className='mt-32'>
    <Footer />
    </div>
  </>
);

export default Layout;
