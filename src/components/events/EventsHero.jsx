import React from 'react';

const EventsHero = () => {
  const heroStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 0',
    textAlign: 'center',
    position: 'relative',
  };

  const contentStyle = {
    maxWidth: '800px',
    position: 'relative',
    zIndex: 2,
  };

  const h2Style = {
    fontSize: '3rem',
    margin: '0 0 1.5rem 0',
    color: '#4dabf7',
    lineHeight: '1.2',
    fontWeight: '700',
  };

  const pStyle = {
    fontSize: '1.25rem',
    margin: '0 0 2.5rem 0',
    lineHeight: '1.7',
    color: '#e2e8f0',
  };

  const buttonStyle = {
    padding: '1rem 2.5rem',
    fontSize: '1.1rem',
    backgroundColor: '#1971c2',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '600',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginRight: '1rem',
  };

  return (
    <section style={heroStyle}>
      <div style={contentStyle}>
        <h2 style={h2Style}>Robotics Club Events</h2>
        <p style={pStyle}>
          Join us for exciting workshops, competitions, and tech talks. From beginner-friendly sessions 
          to advanced robotics challenges, there's something for everyone passionate about technology and innovation.
        </p>
        <button 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1864ab'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#1971c2'}
        >
          View Upcoming Events
        </button>
        <button 
          style={{...buttonStyle, backgroundColor: 'transparent', border: '2px solid #4dabf7', marginRight: '0'}}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#4dabf7';
            e.target.style.color = '#0a0a0a';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';
          }}
        >
          Register Now
        </button>
      </div>
    </section>
  );
};

export default EventsHero;
