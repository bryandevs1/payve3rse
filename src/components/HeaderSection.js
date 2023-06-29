import React from 'react'
import illustration from '../assets/img/ill_header.png'
import styles from '../style';
import { discount } from "../assets";
import robot from '../assets/ambassaor.png'

const Hero = () => {
  return (
    <section id="home" className={`heasdee flex md:flex-row flex-col px-10 md:mt-24 ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-6 px-6`}>
        <div className="flex flex-row items-center py-[6px] mt-20 px-4 bg-orange-500 rounded-lg -mb-20">
          {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">RATES   ARE </span> SUBJECT  TO
            <span className="text-white"> REGULAR </span>  CHANGE
          </p> */}
          
        </div>
                <div className="pt-32 htt sm:pt-0">
                  <h2 className="font-semibold text-4xl text-black">
                    Welcome to
                  </h2>
                  <h2 className="font-semibold text-4xl text-black">
                    The Payv3rse by Mac
                  </h2>
                  <p className="mt-4 text-md leading-relaxed text-black">
                  The Payv3rse By Mac is a highly trusted and reputable digital assets exchange platform, where traders can confidently trade various digital assets. Our fast and reliable payment policies ensure that every transaction is smooth and hassle-free, while our competitive rates guarantee the best value for our users.                  </p>
                  <div className="mt-12 headbutt">
                    <a
                      href="https://wa.me/+2348108296519"
                      target="_blank"
                      className="get-started  hdbt1 text-white font-bold px-6 md:px-2 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-[#ffcb05] active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      TRADE ON OTC
                    </a>
                    <a
                      href="#contact"
                      className="font-bold hdbt2 text-blueGray-700 px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-white active:bg-blueGray-200 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      CONTACT US
                    </a>
                  </div>
                </div>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        
      </div>
    </section>
  );
};

export default Hero
