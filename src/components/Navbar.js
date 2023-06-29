import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faBars, faBlog, faBook, faClose, faMessage, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import logos from '../assets/img/logos.png'
import { Navigate } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
const Navbar = () => {
  const navigate = useNavigate()

  const handleChatButtonClick = () => {
    if (typeof tidioChatApi !== 'undefined') {
      tidioChatApi.open();
    }
  };

  const handleLinkClick = () => {
    navigate('./home')
  }
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleScrollLock = (isLocked) => {
    const body = document.querySelector('body');
    if (isLocked) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  };
  const handleMenuIconClick = () => {
    setIsMobileNavActive(!isMobileNavActive);
    toggleScrollLock(!isMobileNavActive);

  };

  const handleNavItemClick = () => {
    setIsMobileNavActive(false);
    toggleScrollLock(false);
  };

  const handleAgentClick = () => {
    handleNavItemClick();
    handleChatButtonClick();
  }

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav  className={`navv ${isMobileNavActive ? 'mobile-nav-active' : ''} ${visible ? 'navbar-visible' : 'navbar-hidden'}`} id="navbar">
      <a href="#" onClick={handleLinkClick}>
        <img src={logos} alt='logo' className='logosimg p55' />
        <p  className="logo">Payv3rse</p>
      </a>
      
      <div className={`nav-items ${isMobileNavActive ? 'hidden' : ''}`}>
      <div className="nav-link nv7 naa">
        Sell <FontAwesomeIcon icon={faArrowCircleDown} />
        <div className="dropdown-block">
          {/* Add your dropdown content here */}
          <a href="https://wa.me/+2348108296519"><FontAwesomeIcon icon={faMessage} /> Whatsapp Representative</a>
          <a onClick={handleChatButtonClick}><FontAwesomeIcon icon={faPhone} /> Customer Agent</a>
        </div>
      </div>
        <Link to='/about'>
        <a className="nav-link naa">
          About
        </a>
        </Link>
        <a className="nav-link naa" href="#services">
          Services
        </a>
        <div className="nav-link nv7 naa">
            Resources <FontAwesomeIcon icon={faArrowCircleDown} />
            <div className="dropdown-block2">
              {/* Add your dropdown content here */}
              <Link to='/dictionary'><a><FontAwesomeIcon icon={faBook} />   Dictionary</a></Link>
              <Link to='/blog'><a><FontAwesomeIcon icon={faBlog} /> Blog</a></Link>
            </div>
          </div>
        <a className="nav-link naa" href="#faqs">
          FAQ's
        </a>
        <a className="nav-link naa" href="#testimonials">
          Testimonials
        </a>
        <a href="https://wa.me/+2348108296519" className='nav-link p-1 navbutt'>Start Trading</a>

      </div>

      <div className="menu-icon" onClick={handleMenuIconClick}>
        <FontAwesomeIcon icon={faBars} className='cursor-pointer iicon' />
        <FontAwesomeIcon icon={faClose} className='cursor-pointer iiicon' />
      </div>
      <div className={`mobile-nav-menu ${isMobileNavActive ? 'active' : ''}`}>
      <div className="nav-link nv1 naa">
  Sell <FontAwesomeIcon icon={faArrowCircleDown} />
  <div className="dropdown-block">
    {/* Add your dropdown content here */}
    <a onClick={handleNavItemClick} href="https://wa.me/+2348108296519" target='_blank'><FontAwesomeIcon icon={faMessage} /> Whatsapp Representative</a>
    <a onClick={handleAgentClick}><FontAwesomeIcon icon={faPhone} /> Customer Agent</a>
  </div>
</div>
        <Link className='nv3' to='/about'>
        <a onClick={handleNavItemClick} className="nv3 mb-5 nav-link naa">
          About
        </a>
        </Link>
        <a onClick={handleNavItemClick} className=" nv3 nav-link naa" href="#services">
          Services
        </a>
        <div className="nav-link nv4 naa">
  Resources <FontAwesomeIcon icon={faArrowCircleDown} />
  <div className="dropdown-block2">
    {/* Add your dropdown content here */}
    <Link to='/dictionary'><a onClick={handleNavItemClick}><FontAwesomeIcon icon={faBook} />   Dictionary</a></Link>
    <Link to='./blog'><a onClick={handleNavItemClick}><FontAwesomeIcon icon={faBlog} /> Blog</a></Link>
  </div>
</div>
        <a className="nav-link nv5 naa" href="#faqs" onClick={handleNavItemClick}>
          FAQ's
        </a>
        <a className="nav-link nv6 naa" href="#testimonials" onClick={handleNavItemClick}>
          Testimonials
        </a>
        <a href="https://wa.me/+2348108296519" className='nav-link  px-5 navbutt2' onClick={handleNavItemClick}>Start Trading</a>

      </div>
    </nav>
  );
};
export default Navbar;
