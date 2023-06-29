import React, { useEffect, useState } from 'react';
import RateCalc from '../assets/dice.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faBitcoinSign, faDollar, faFilterCircleDollar, faMoneyBill, faNairaSign } from '@fortawesome/free-solid-svg-icons';
import logos from '../assets/img/logos.png'
import styles from '../style';
import { discount } from "../assets";


    function RateCalculator() {
        const [selectedCrypto, setSelectedCrypto] = useState('');
        const [selectedFiat, setSelectedFiat] = useState('');
        const [fiatOptions, setFiatOptions] = useState([]);
        const [cryptoAmount, setCryptoAmount] = useState('');
        const [showResult, setShowResult] = useState(false);
        const [conversionResult, setConversionResult] = useState('');
        const [selectedWalletTType, setSelectedWalletTType] = ([])
      

      
        const handleCryptoChange = (event) => {
          const crypto = event.target.value;
          setSelectedCrypto(crypto);
          setSelectedFiat('');
          setFiatOptions(getFiatOptions(crypto));
        };
      
        const handleFiatChange = (event) => {
          const fiat = event.target.value;
          setSelectedFiat(fiat);
        };

        const [amountInput, setAmountInput] = useState('');
        const [amountError, setAmountError] = useState('');

      
          const handleAmountChange = (event) => {
            const amount = event.target.value;
            setAmountInput(amount);
            setAmountError('');
            calculateConversion()
            setConversionResult('');
            setShowResult(false);
          };
      
        const getFiatOptions = (crypto) => {
          // Replace with your data source or API call
          const data = {
            "fiats": {
              "btc": [
                { "code": "usd", "name":<div><img src={logos} height='20px' width='20px'/> BTC (10.00-500.00) : 780.0/$ </div>,  range: { min: 10, max: 500 } },
                { "code": "eur", "name": "BTC (500.00-1000.00) : 787.0/$",  range: { min: 500, max: 1000 } },
              ],
              "usdte": [
                { "code": "usd", "name":<div><img src={logos} height='20px' width='20px'/> USDT (10.00-500.00) : 780.0/$ </div>,  range: { min: 10, max: 500 } },
                { "code": "eur", "name": "USDT (500.00-1000.00) : 787.0/$",  range: { min: 500, max: 1000 } },
              ],
              "usdtt": [
                { "code": "usd", "name":<div><img src={logos} height='20px' width='20px'/> USDT (10.00-500.00) : 780.0/$ </div>,  range: { min: 10, max: 500 } },
                { "code": "eur", "name": "USDT (500.00-1000.00) : 787.0/$",  range: { min: 500, max: 1000 } },
              ],
              "eth": [
                { "code": "usd", "name":<div><img src={logos} height='20px' width='20px'/> ETH (10.00-500.00) : 780.0/$ </div>,  range: { min: 10, max: 500 } },
                { "code": "eur", "name": "ETH (500.00-1000.00) : 787.0/$",  range: { min: 500, max: 1000 } },
              ]
            },
            "exchangeRates": {
              "btc": {
                "usd": 780,
                "eur": 787,
              },
              "usdte": {
                "usd": 780,
                "eur": 787
              },
              "usdtt": {
                "usd": 780,
                "eur": 787
              },
              "eth": {
                "usd": 780,
                "eur": 787
              }
            }
          };
      
          return data.fiats[crypto] || [];
        };
      
        const calculateConversion = () => {
          if (selectedCrypto && selectedFiat && cryptoAmount) {
            // Replace with your data source or API call
            const data = {
              "exchangeRates": {
                "btc": {
                  "usd": 780,
                  "eur": 787,
                },
                "usdte": {
                  "usd": 780,
                  "eur": 787
                },
                "usdtt": {
                  "usd": 780,
                  "eur": 787
                },
                "eth": {
                  "usd": 780,
                  "eur": 787
                }
              }
            };
      
            const exchangeRate = data.exchangeRates[selectedCrypto][selectedFiat];
            const result = cryptoAmount * exchangeRate;
            setConversionResult(result.toFixed(2));
            setShowResult(true);
          }
        };

        const handleCalculate = () => {
          // Check the selected fiat option and validate the amount
          if (selectedFiat) {
            if (selectedFiat === "usd") {
              if (amountInput >= 10 && amountInput <= 500) {
                setCryptoAmount(amountInput);
                setAmountError('');
              } else {
                setAmountError('Invalid amount. Amount must be between 10 and 500.');
                return; // Return early to prevent the calculation
              }
            } else if (selectedFiat === "eur") {
              if (amountInput >= 500 && amountInput <= 1000) {
                setCryptoAmount(amountInput);
                setAmountError('');
              } else {
                setAmountError('Invalid amount. Amount must be between 500 and 1000.');
                return; // Return early to prevent the calculation
              }
            }
          }
          calculateConversion();
        };
        

        useEffect(() => {
          calculateConversion();
        }, [selectedCrypto, selectedFiat, cryptoAmount]);
        return (
            <section className="mt-48 md:mt-40 pb-20 relative bg-transparent">

              <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20" style={{ transform: 'translateZ(0)' }}>
                {/* <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                  <polygon className=" bg-transparent fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg> */}
              </div>
              <div className="containerr mx-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-11/12 md:w-8/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                    <div className="relative flex flex-col min-w-0 break-words bg-buttton w-full mb-3 shadow-lg rounded-lg">
                      <img alt="..." src={RateCalc} className="w-full align-middle rounded-t-lg" />
                      <blockquote className="relative p-8 mb-4">
                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                          <polygon points="-30,95 583,95 583,65" className="text-buttton fill-current"></polygon>
                        </svg>
                        <h4 className="text-3xl font-bold text-white">Rate Calculator</h4>
                        <p className="text-md font-light mt-2 text-white">
                        Our platform allows you to easily input cryptocurrency values and quickly convert them to fiat currencies, so you can make informed decisions and know the exact amount you'll receive in Naira.                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center py-[6px] px-3 py-2 bg-buttton rounded-lg -mb-20">
                      <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                      <div className='flex flex-row'><p className={`${styles.paragraph} ml-2`}>
                        RATES   ARE  SUBJECT  TO
                         REGULAR  CHANGE
                      </p>
                    </div>
                    </div>
                  </div>

        
                  <div className="w-full md:w-6/12 px-4">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-6/12 px-4">
                        <div className="relative flex flex-col mt-4">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <FontAwesomeIcon icon={faBitcoinSign} />
                            </div>
                            <h6 className="text-xl mb-3 font-semibold">Select E-Currency</h6>
                            <div className="w-full border-black rounded-xl">
                              <select className="w-full rounded-md cursor-pointer bg-transparent text-gray-400 px-2 sm:text-[16px] md:text-[20px] py-0 font-my_font" name=""id="crypto-select"
                                 value={selectedCrypto}
                                onChange={handleCryptoChange}>
                                <option value="">Select Crypto</option>
                                <option value="btc"> <FontAwesomeIcon icon={faBitcoinSign} />  BITCOIN</option>
                                <option value="usdte">USDT ERC20</option>
                                <option value="usdtt">USDT TRC20</option>
                                <option value="eth">ETH ERC20</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="relative flex flex-col min-w-0">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <FontAwesomeIcon icon={faFilterCircleDollar} />
                            </div>
                            <h6 className="text-xl mb-3 font-semibold">Wallet Type</h6>
                            <div className="w-full border-black rounded-xl">
                              <select className="w-full rounded-md cursor-pointer bg-transparent text-gray-400 px-2 sm:text-[16px] md:text-[20px] py-0 font-my_font" name="" value={selectedWalletTType} id="fiat-select">
                              <option value="">Select Wallet Type</option>
                                 <option key=''>Blockchain</option>
                                 <option key=''>Binance</option>
                                 <option key=''>Paxful</option>
                                 <option key=''>Luno</option>
                                 <option key=''>Exodus</option>
                                 <option key=''>Others</option>
                            

                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full md:w-6/12 px-4 max-md::mt-5">
                      <div className="relative flex flex-col min-w-0">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <FontAwesomeIcon icon={faMoneyBill} />
                            </div>
                            <h6 className="text-xl mb-3 font-semibold">E-Currency value</h6>
                            <div className="w-full border-black rounded-xl">
                              <select className="w-full rounded-md cursor-pointer bg-transparent text-gray-400 px-2 sm:text-[16px] md:text-[20px] py-0 font-my_font" name=""        id="fiat-select"
                                value={selectedFiat}
                                onChange={handleFiatChange}
                                disabled={!selectedCrypto}>
                              <option value="">Select Fiat</option>
                                {fiatOptions.map((fiat) => (
                                 <option key={fiat.code} value={fiat.code}>
                                {fiat.name}
                                </option>
                            ))}

                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="relative flex flex-col mt-4">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <FontAwesomeIcon icon={faDollar} />
                            </div>
                            <h6 className="text-xl mb-3 font-semibold">Amount</h6>
                            <div className="w-full border-black rounded-xl">
                            <input
                              type="number"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md shadow-lg text-base outline-none focus:outline-none focus:ring w-full"
                              placeholder="Enter amount"
                              id="crypto-amount"
                              value={amountInput}
                              onChange={handleAmountChange}
                            />
                            {amountError && <p className="text-red-500">{amountError}</p>}

                            </div>
                          </div>
                        </div>
                        
                        <div className="relative flex flex-col price min-w-0">
                          <div className="px-4 py-5 flex-auto">
                              <div className="w-32 rounded-3xl">
                                <div className='results' id='result' placeholder='NGN'>
                                                        
                            {showResult ? (
                            <div>
                            You will recieve <FontAwesomeIcon icon={faNairaSign} />{conversionResult}
                            </div>
                             ) :<FontAwesomeIcon icon={faNairaSign} />
                            }
                             </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="w-full md:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                              <i className="fas fa-money-bill-wave"></i>
                            </div>
                            <h6 className="text-xl mb-3 font-semibold">Amount</h6>
                            <input
                              type="number"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md shadow-lg text-base outline-none focus:outline-none focus:ring w-full"
                              placeholder="Enter amount"
                              id="crypto-amount"
                            />
                          </div>
                        </div>
                      </div>

                    </div> */}
                    <div className='flex rcbtn'>
                    <div className="text-center mt-6">
                      <button
                        className="get-started text-white font-bold px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-buttton active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                        id="calculate-btn"  onClick={handleCalculate} disabled={!selectedFiat || !amountInput }
                      >
                        Calculate
                      </button>
                    </div>
                    <div className="text-center mt-6 ">
                    <a href="https://wa.me/+2348108296519"><button href="https://wa.me/+2348108296519"
                        className="proceeed font-bold text-blueGray-700 px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-white active:bg-blueGray-200 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all hover:cursor-pointer duration-150"
                        id="calculate-btn" disabled={!showResult}
                      >
                        <a href="https://wa.me/+2348108296519">
                        PROCEED <FontAwesomeIcon className='proceedicon' icon={faArrowRightArrowLeft} />
                        </a>
                      </button>
                      </a>
                    </div>
                    </div>

                  </div>
                </div>
              </div>
              </div>
            </section>
          );
        }

export default RateCalculator;