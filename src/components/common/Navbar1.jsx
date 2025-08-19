import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const headerStyle = {
    backgroundColor: '#1c1c1c',
    color: 'white',
    padding: '1rem 0',
    borderBottom: '1px solid #444'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const h1Style = {
    margin: 0
  };

  const navStyle = {
    display: 'flex',
    gap: '1.5rem',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 0',
    fontSize: '1rem',
    fontWeight: '500',
    borderBottom: '2px solid transparent',
    transition: 'all 0.2s ease',
  };

  const activeLinkStyle = {
    ...linkStyle,
    borderBottom: '2px solid #4dabf7',
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={h1Style}>Robotics Club</h1>
        <nav>
          <ul style={navStyle}>
            <li><Link to="/" style={isActive('/') ? activeLinkStyle : linkStyle}>Home</Link></li>
            <li><Link to="/events" style={isActive('/events') ? activeLinkStyle : linkStyle}>Events</Link></li>
            <li><Link to="/team" style={isActive('/team') ? activeLinkStyle : linkStyle}>Team</Link></li>
            <li><Link to="/gallery" style={isActive('/gallery') ? activeLinkStyle : linkStyle}>Gallery</Link></li>
            <li><Link to="/achievements" style={isActive('/achievements') ? activeLinkStyle : linkStyle}>Achievements</Link></li>
            <li><Link to="/contact" style={isActive('/contact') ? activeLinkStyle : linkStyle}>Contact & Join</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;