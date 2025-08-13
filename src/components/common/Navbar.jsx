import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#0a0a0a',
    color: 'white',
    padding: '1.2rem 0',
    borderBottom: '1px solid #1e3a8a',
    boxShadow: '0 2px 15px rgba(0, 100, 255, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    textDecoration: 'none',
  };

  const logoTextStyle = {
    margin: 0,
    color: '#4dabf7',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
  };

  const navStyle = {
    display: 'flex',
    gap: '2rem',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: '#4dabf7',
    textDecoration: 'none',
    padding: '0.5rem 0',
    fontSize: '1.1rem',
    fontWeight: '500',
    borderBottom: '2px solid transparent',
  };

  const activeLinkStyle = {
    ...linkStyle,
    borderBottom: '2px solid #1971c2',
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <a href="/" style={logoStyle}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#1971c2',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>RC</div>
          <h1 style={logoTextStyle}>Robotics Club</h1>
        </a>
        
        <nav>
          <ul style={navStyle}>
            <li><a href="/" style={linkStyle}>Home</a></li>
            <li><a href="/about" style={linkStyle}>About</a></li>
            <li><a href="/members" style={linkStyle}>Members</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;