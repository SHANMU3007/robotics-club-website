import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const headerStyle = {
    backgroundColor: '#121212',
    color: 'white',
    padding: '1.2rem 0',
    borderBottom: '1px solid #4A90E2',
    boxShadow: '0 2px 15px rgba(74, 144, 226, 0.1)',
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
    color: '#4A90E2',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
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
    color: '#E0E0E0',
    textDecoration: 'none',
    padding: '0.5rem 0',
    fontSize: '1rem',
    fontWeight: '500',
    borderBottom: '2px solid transparent',
    transition: 'all 0.2s ease',
  };

  const activeLinkStyle = {
    ...linkStyle,
    borderBottom: '2px solid #61DAFB',
    color: '#61DAFB',
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#4A90E2',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>RC</div>
          <h1 style={logoTextStyle}>Robotics Club</h1>
        </Link>
        
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
