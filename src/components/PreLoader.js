import React, { useEffect, useRef } from 'react'

function PreLoader() {
  const preloaderRef = useRef(null);
  useEffect(() => {
    const fadeout = () => {
      preloaderRef.current.style.opacity = '1';
      setTimeout(() => {
        preloaderRef.current.style.display = 'none';
      }, 1000); // Delay the display none by 500 milliseconds
    };

    fadeout();
  }, []);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-inner">
          <div className="preloader-icon">
              <span className="bg-orange-500"></span>
              <span className="bg-orange-500"></span>
          </div>
      </div>
  </div>

  )
}

export default PreLoader
