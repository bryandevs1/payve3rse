import React, { useEffect } from 'react';

const TidioChat = () => {
  useEffect(() => {
    const tidioScript = document.createElement('script');
    tidioScript.src = '//code.tidio.co/owpdns4eqy8tf8e9mhzqeyjaru0mahl9.js';
    tidioScript.async = true;
    
    document.body.appendChild(tidioScript);

    return () => {
      // Cleanup the Tidio script when the component is unmounted
      document.body.removeChild(tidioScript);
    };
  }, []);

  return null;
};

export default TidioChat;
