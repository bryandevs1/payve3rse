import React from 'react';
import './globals.scss';
import '../App.css';
import { Layout } from '../components';
import styled from 'styled-components';

import Blog from './index'
import Preloader from '../components/PreLoader'

const Cont = styled.div`
background-color: #fff
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <Cont>
    <Layout>
      <Preloader />
      <Blog {...pageProps} />
    </Layout>
    </Cont>
  );
}

export default MyApp;
