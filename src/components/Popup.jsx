import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import bg1 from '../assets/img/bg-1.png'
import bg2 from '../assets/img/bg-2.png'
import bg3 from '../assets/img/hero-image-small.png'
import bg4 from '../assets/img/hero-image.png'

const Popup = () => {
    const [remainingTime, setRemainingTime] = useState(5);
    const [allowedToSkip, setAllowedToSkip] = useState(false);
    const [popupTimer, setPopupTimer] = useState(null);
  
    const createPopupCookie = () => {
      let expiresDays = 30;
      let date = new Date();
      date.setTime(date.getTime() + expiresDays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + date.toUTCString();
      document.cookie = `popupCookie=true; ${expires}; path=/;`;
    };
  
    const showAd = () => {
      // Implement the logic to show the popup overlay
      // You can use CSS classes or state variables to control the visibility of the overlay
      // For simplicity, let's assume there are CSS classes named "popup-overlay active" to show the overlay
      // and "popup-container skip-button" and "popup-container visit-button" for skip and visit buttons respectively
  
      setPopupTimer(
        setInterval(() => {
          setRemainingTime((prevTime) => {
            if (prevTime <= 0) {
              setAllowedToSkip(true);
              clearInterval(popupTimer);
              return "Skip";
            }
            return prevTime - 1;
          });
        }, 1000)
      );
    };
  
    const skipAd = () => {
      // Implement the logic to hide the popup overlay and create a cookie
      // You can use CSS classes or state variables to control the visibility of the overlay
      // For simplicity, let's assume there is a CSS class named "popup-overlay" to hide the overlay
  
      clearInterval(popupTimer);
      createPopupCookie();
    };
  
    const handleSkipButtonClick = () => {
      if (allowedToSkip) {
        skipAd();
      }
    };
  
    useEffect(() => {
      const startTimer = () => {
        if (window.scrollY > 100) {
          showAd();
          window.removeEventListener("scroll", startTimer);
        }
      };
  
      if (!document.cookie.match(/^(.*;)?\s*popupCookie\s*=\s*[^;]+(.*)?$/)) {
        window.addEventListener("scroll", startTimer);
      }
  
      return () => {
        window.removeEventListener("scroll", startTimer);
      };
    }, []);
    return (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="left">
              <img className="bg-2" src={bg2} alt="" />
              <img className="bg-1" src={bg1} alt="" />
              <img className="hero-image" src={bg4} alt="" />
              <img className="hero-image-small" src={bg3} alt="" />
            </div>
    
            <div className="right">
              <div className="skip-button" onClick={handleSkipButtonClick}>
          {allowedToSkip ? "Skip" : `Skip in ${remainingTime}s`}</div>
    
              <p className="logo">Live Blogger</p>
              <h2 className="popup-heading">Design Course</h2>
              <p className="description">
                Learn to design modern types of designs using HTML and CSS. Click below to view more details.
              </p>
    
              <a href="#" className="visit-button">Visit Site</a>
            </div>
          </div>
        </div>
  )
}

export default Popup
