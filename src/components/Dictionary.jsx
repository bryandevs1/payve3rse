import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import 'jquery-mousewheel';
import Navbar from './Navbar';
import WordList from './Dict';
import Footer from './Footer'
import PreLoader from './PreLoader';

const Diction = () => {


  return (
    <div>
      <PreLoader />
      <Navbar />
      <div className='lalalalala'>
      <WordList />
      </div>
      <Footer />
    </div>
  );
}

export default Diction;
