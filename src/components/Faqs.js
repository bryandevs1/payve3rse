import { useState } from 'react';
import React from 'react';
import './faqcss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const FAQSection =() => {
    const faqs = document.querySelectorAll('.faq');

    const [activeFAQ, setActiveFAQ] = useState(null);

    const handleFAQClick = (faqId) => {
      setActiveFAQ(faqId === activeFAQ ? null : faqId);
    };
  

        return (
        <div className="section mb-20" id="faqs">
        <h1 className='text-buton text-yellow-400'>Frequently Asked Questions</h1>
        <div className="container-1">
          <div className={`hover:cursor-pointer faq ${activeFAQ === 1 ? 'active' : ''}`}
            onClick={() => handleFAQClick(1)}>
            <div className="question text-black">
              <h2>What is the current rate on Crypto and Gift cards today?</h2>
              <FontAwesomeIcon icon={faPlusCircle} color='grey'/>
            </div>
            <div className="answer">
              <p>You can find out the latest rates for gift cards and cryptocurrency by visiting our social media pages or
               clicking the trade button to speak with a customer service representative. 
               Remember that rates can change frequently, so it's important to check for updates before making any trades.</p>
            </div>
          </div>

          <div className={`faq ${activeFAQ === 2 ? 'active' : ''}`}
            onClick={() => handleFAQClick(2)}>
            <div className="question">
              <h2 className='text-black'>How do i send crypto?</h2>
              <FontAwesomeIcon icon={faPlusCircle} color='grey'/>
            </div>
            <div className="answer">
              <p>We accept cryptocurrency trades to any of our wallets that correspond to the specific coin you want to trade. 
                To get the wallet address for the coin you're interested in, please contact our customer service team. They'll be more than happy to help you with the process.
                </p>
            </div>
          </div>

          <div className={`faq ${activeFAQ === 3 ? 'active' : ''}`}
            onClick={() => handleFAQClick(3)}>
            <div className="question">
              <h2>How long does payment take?</h2>
              <FontAwesomeIcon icon={faPlusCircle} color='grey'/>
            </div>
            <div className="answer">
              <p>As soon as your crypto payment is received, it will be processed instantly. In less than 5 minutes!</p>
            </div>
          </div>
          <div className={`faq ${activeFAQ === 7 ? 'active' : ''}`}
            onClick={() => handleFAQClick(7)}>
            <div className="question">
              <h2>Can my coins get ripped?</h2>
              <FontAwesomeIcon icon={faPlusCircle} color='grey'/>
            </div>
            <div className="answer">
              <p>We take our customers' security very seriously at Payv3rse By Mac. Please be aware that we will never contact you first via DM.
                Our official Instagram account only follows our brand founder (Mac), and we strongly advise our customers not to engage with any phone numbers on WhatsApp besides ‪08108296519‬.
                </p>
            </div>
          </div>
          <div className={`faq ${activeFAQ === 8 ? 'active' : ''}`}
            onClick={() => handleFAQClick(8)}>
            <div className="question text-black">
              <h2 className='text-black'>Do The Payv3rse By Mac buy all crypto assets?</h2>
              <FontAwesomeIcon icon={faPlusCircle} color='grey'/>
            </div>
            <div className="answer text-black">
              <p className='text-black lalalal'>At Payv3rse By Mac, we buy all types of cryptocurrency on both the Binance and Ethereum networks. Whether you have Bitcoin, Litecoin, or any other type of cryptocurrency, we are happy to help you exchange it for cash. 
                We offer competitive rates and a safe, secure platform for all transactions.
                </p>
            </div>
          </div>
        </div>

        <div className="container-2">
          <div className={`faq ${activeFAQ === 4 ? 'active' : ''}`}
            onClick={() => handleFAQClick(4)}>
            <div className="question">
              <h2>How do i receive my payment?</h2>
              <FontAwesomeIcon icon={faPlusCircle} color='grey'/>
            </div>
            <div className="answer">
              <p>We understand that our customers value prompt and reliable payments, which is why we process payments directly into the account of their choice as soon as trades are completed and confirmed. 
                This ensures that you receive your funds as quickly as possible. We take pride in providing a safe and secure platform for all transactions, so you can rest assured that your payment will be processed securely.
                </p>
            </div>
          </div>

          <div className={`faq ${activeFAQ === 5 ? 'active' : ''}`}
            onClick={() => handleFAQClick(5)}>
            <div className="question">
              <h2>Why has my transaction not been confirmed?</h2>
              <FontAwesomeIcon icon={faPlusCircle} color='grey'/>
            </div>
            <div className="answer">
              <p>After completing a trade, it typically takes anywhere from 30 minutes to a few hours for the transaction to be confirmed in the blockchain. 
                Once this confirmation is received, your account will be credited with the appropriate amount. We appreciate your patience during this process and strive to make it as quick and efficient as possible
                </p>
            </div>
          </div>

          <div className={`faq ${activeFAQ === 6 ? 'active' : ''}`}
            onClick={() => handleFAQClick(6)}>
            <div className="question">
              <h2>Who’s the founder of The Payv3rse By Mac?</h2>
              <FontAwesomeIcon icon={faPlusCircle} color='grey' />
            </div>
            <div className="answer">
              <p>Our brand founder, Macaulay Abdulrazak, is a 21-year-old entrepreneur and art enthusiast from Edo state, Nigeria. 
                With a passion for the cryptocurrency industry and a keen interest in web3, Mac has established Payv3rse as a safe and reliable platform for buying and selling cryptocurrencies. His dedication to innovation and customer satisfaction has helped Payv3rse to become a leading name in the industry.
                </p>
            </div>
          </div>

          <div className={`faq ${activeFAQ === 9 ? 'active' : ''}`}
            onClick={() => handleFAQClick(9)}>
            <div className="question">
              <h2>Is The Payv3rse By Mac registered?</h2>
              <FontAwesomeIcon icon={faPlusCircle} color='grey'/>
            </div>
            <div className="answer mb-20">
              <p>Payv3rse By Mac is a fully registered company under the Laws of the Federal Republic of Nigeria with RC Number: 6882888. 
                As we continue to grow and expand our reach, we are exploring opportunities to obtain additional licenses that will enable us to better serve our customers throughout Africa. 
                Our commitment to compliance and regulatory standards is a top priority, and we are always looking for ways to improve our services and enhance our customers' experience.</p>
            </div>
          </div>
          <div></div>
        </div>
        </div>
                );
              }

export default FAQSection;

