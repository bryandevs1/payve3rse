import { faAssistiveListeningSystems, faClipboardQuestion, faEnvelopeOpen, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import TidioChat from './TidioWidget'; // Import the TidioChat component
import { useState } from 'react';


function FloatingButton() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleToggle = () => {
    const toggleButton = document.getElementById('floating-toggle');
    toggleButton.classList.toggle('active');
  };

  const handleChatToggle = () => {
    setIsChatVisible(!isChatVisible);
  };
  
  return (
    <div className="floating">
      <div className="floating__container fixed bottom-2">
        <div className="floating__toggle" id="floating-toggle">
        <SocialIcon network="whatsapp" url='https://wa.me/+2348108296519' style={{ height: 60, width: 60 }} bgColor='#ffd800' fgColor='#000' className='text-white' />
        </div>

        <ul>
          <a  href="https://wa.me/+2348108296519" target='_blank' className="floating__link">
            <div className="floating__icon">
            <SocialIcon network="whatsapp" style={{ height: 35, width: 35 }} />
            </div>
          </a>

          <a target='_blank' className="floating__link">
            <div className="floating__icon">
            <SocialIcon network="twitch" style={{ height: 35, width: 35 }} />
            </div>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default FloatingButton;