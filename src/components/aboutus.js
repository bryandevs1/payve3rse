import React from 'react';
import logos from '../assets/robot.png';
import Navbar from './Navbar';
import Footer from './Footer';
import amb from '../assets/ambassaor.png'
import PreLoader from './PreLoader';

const Aboutus = () => {
  return (
    <>
    <PreLoader />
    <Navbar />
    <div>
      <div className="heading">
        <h1>About Payv3rse</h1>
        <p>
          Payv3rse is a cutting-edge digital exchange brand that makes it easy for users to exchange digital currencies such as bitcoin, Ethereum, USDT, Solana, and USDC. Our platform is designed to provide a seamless and secure experience for users looking to convert their digital assets to fiat currencies. Whether you're an expert or a newbie to the world of cryptocurrency, Payv3rse is the perfect platform for you.
        </p>
      </div>
      <div className="containera">
        <section className="abouta">
          <div className="abouta-image">
            <img src={amb} alt="Payv3rse Ambassador" />
          </div>
          <div className="abouta-content">
            <p>
              Our brand was founded on December 10, 2022, by Macaulay Abdulrazak, a 21-year-old entrepreneur and art enthusiast from Edo state, Nigeria. With a passion for the cryptocurrency industry and a keen interest in web3, Mac has established Payv3rse as a safe and reliable platform for buying and selling cryptocurrencies. His dedication to innovation and customer satisfaction has helped Payv3rse become a leading name in the industry. At Payv3rse, we believe in providing our users with the best possible experience. That's why we've built a platform that is intuitive, user-friendly, and secure.
            </p>
            <a href="Https://wa.me/+2348108296519" className="read-more">CONTACT US!</a>
          </div>
        </section>
      </div>
      <div className="heading hea2">
        <p>
          You can also learn more from our blog and our crypto dictionary. Our blog is filled with informative articles that cover a wide range of topics related to digital currencies, while our crypto dictionary is a comprehensive resource that can help you understand the different terms and concepts related to the cryptocurrency industry. We're committed to providing our users with the resources they need to make informed decisions about their digital assets.
          Whether you're looking to buy or sell cryptocurrencies, Payv3rse is the perfect platform for you. With our easy-to-use website and OTC desk, you can convert your digital assets to fiat currencies quickly and easily. Join the Payv3rse community today and experience the future of digital currency exchange!
        </p>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Aboutus;
