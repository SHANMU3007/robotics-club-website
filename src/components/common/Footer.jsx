import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1c1c1c',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
    marginTop: 'auto'
  };
  
  // This is a simple class-based style for centering content
  // in a responsive way. It's defined in index.css
  // and is used here for alignment.
  const container = "container";

  return (
    <footer style={footerStyle}>
      <div className={container}>
        <p>© 2025 Robotics Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
