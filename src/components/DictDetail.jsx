import React from 'react';
import products from './Wordlist';
import { useParams } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import VoiceFetcher from './VoiceFetcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import PreLoader from './PreLoader';

const WordDetails = ({ match }) => {
  // Extract the word parameter from the URL
  const { word } = useParams();

  // Find the product with the matching word in the products data
  const product = products.data.find((product) => product.word === word);

  if (!product) {
    return <div>Word not found</div>;
  }

  const speakWord = () => {
    const utterance = new SpeechSynthesisUtterance(product.word);
    speechSynthesis.speak(utterance);
  };
  return (
    <>
    <PreLoader />
    <div className="kakaka">
        <Navbar />
      <div className='dictfirst sm:pt-16'>      
      <h1 className='dictfirsth1 text-center text-white font-extrabold text-4xl'>A Crypto Dictionary by Payv3rse</h1>
      <h1 className='dictfirsth1 text-center text-white font-extrabold text-4xl dih1'>"{product.word}"</h1>
    </div>
    <div className='cddetcont'>
    <div
                className={`carddd cddet `}
              >
                <div className="word relative">{product.word} <FontAwesomeIcon onClick={speakWord} icon={faVolumeHigh} className='absolute cursor-pointer favol'/></div>
                <div className="meaning">{product.meaning}</div>
              </div>
              </div>
    </div>
    <Footer />
    {/* <VoiceFetcher /> */}
    </>
  );
};

export default WordDetails;
