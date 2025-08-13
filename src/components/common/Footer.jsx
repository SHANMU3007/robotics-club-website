import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#0a0a0a',
    color: '#e2e8f0',
    padding: '2rem 0',
    marginTop: 'auto',
    borderTop: '1px solid #1e3a8a',
    fontSize: '0.9rem',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1rem',
  };

  const linksStyle = {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const linkStyle = {
    color: '#e2e8f0',
    textDecoration: 'none',
  };

  const copyrightStyle = {
    color: '#94a3b8',
    marginTop: '1rem',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
  };

  const socialIconStyle = {
    color: '#94a3b8',
    fontSize: '1.2rem',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>

        
        <div style={socialLinksStyle}>
          <a href="https://facebook.com" style={socialIconStyle}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" style={socialIconStyle}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" style={socialIconStyle}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" style={socialIconStyle}>
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <p style={copyrightStyle}>
          © {new Date().getFullYear()} Robotics Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;