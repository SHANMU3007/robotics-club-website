import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#1c1c1c',
    color: 'white',
    padding: '1rem 0',
    borderBottom: '1px solid #444'
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: '0',
    marginTop: '1rem'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0 15px',
    transition: 'color 0.3s ease'
  };
  
  const h1Style = {
    margin: 0
  };
  
  // This is a simple class-based style for centering content
  // in a responsive way. It's defined in index.css
  // and is used here for alignment.
  const container = "container";

  return (
    <header style={headerStyle}>
      <div className={container}>
        <h1 style={h1Style}>Robotics Club</h1>
        <nav>
          <ul style={navStyle}>
            <li><a href="/" style={linkStyle}>Home</a></li>
            <li><a href="/about" style={linkStyle}>About</a></li>
            <li><a href="/events" style={linkStyle}>Events</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
