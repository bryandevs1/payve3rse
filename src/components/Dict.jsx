import React, { useState } from 'react';
import products from './Wordlist';
import { Link } from 'react-router-dom';

const WordList = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const [showFirstLetterCards, setShowFirstLetterCards] = useState(true);

  const handleFilterChange = (value) => {
    setActiveFilter(value);
  };

  const handleSearch = (event) => {
    const input = event.target.value.toUpperCase();
    setSearchInput(input);

    if (input.trim() === '') {
      setShowFirstLetterCards(true);
    } else {
      setShowFirstLetterCards(false);
    }
  };

  const filteredProducts =
    activeFilter === 'all'
      ? products.data
      : products.data.filter((product) =>
          product.word.toUpperCase().startsWith(activeFilter)
        );

  const getFirstLetter = (word) => word.charAt(0).toUpperCase();

  return (
    <div className="kakaka">
      <div className='dictfirst sm:pt-16'>
        <h1 className='dictfirsth1 text-center text-white font-extrabold text-4xl'>A Crypto Dictionary by Payv3rse</h1>
        <div className="buttons text-center">
          <button
            className={`button-value ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          {/* Render filter buttons from A to Z */}
          {Array.from(Array(26)).map((_, index) => {
            const letter = String.fromCharCode(65 + index);
            return (
              <button
                key={letter}
                className={`text-center button-value ${activeFilter === letter ? 'active' : ''}`}
                onClick={() => handleFilterChange(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>
        <div className="text-center search-container">
          <input
            className="search-input"
            id="search-input"
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="text-center products" id="products">
        {filteredProducts.map((product, index) => {
          const isFirstLetterChange =
            index === 0 ||
            getFirstLetter(product.word) !== getFirstLetter(filteredProducts[index - 1].word);
          
          // Check if the current card matches the search input
          const isCardMatchingSearch = product.word.toUpperCase().includes(searchInput);

          return (
            <React.Fragment key={index}>
              {isFirstLetterChange && showFirstLetterCards && (
                <div className="demarcation ">
                  <p className='absolute lololo'>
                    {getFirstLetter(product.word)}
                    <br />
                  </p>
                </div>
              )}
              {isCardMatchingSearch && (
                <Link to={`/dictionary/${product.word}`}>
                  <div
                    className={`carddd ${activeFilter !== 'all' &&
                      !product.word.toUpperCase().startsWith(activeFilter)
                      ? 'hide'
                      : ''} ${isFirstLetterChange ? 'new-row' : ''}`}
                  >
                    <div className="word">{product.word}</div>
                    <div className="meaning">{product.excerpt}</div>
                  </div>
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default WordList;
