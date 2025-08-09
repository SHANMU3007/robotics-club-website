import React from 'react';

const PastEvents = () => {
  const pastEventsStyle = {
    padding: '2rem 2rem',
    marginBottom: '2rem'
  };
  
  const h3Style = {
    fontSize: '2rem',
    marginBottom: '2rem',
    textAlign: 'center'
  };
  
  const eventListStyle = {
    listStyleType: 'none',
    padding: 0
  };
  
  const eventItemStyle = {
    marginBottom: '1rem',
    backgroundColor: '#4a4a4a',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  };
  
  const dateStyle = {
    fontSize: '0.9em',
    color: '#ccc'
  };
  
  const titleStyle = {
    marginTop: 0
  };

  return (
    <section style={pastEventsStyle}>
      <h3 style={h3Style}>Past Events</h3>
      <ul style={eventListStyle}>
        <li style={eventItemStyle}>
          <h4 style={titleStyle}>Arduino Programming 101</h4>
          <p style={dateStyle}>Date: September 10, 2025</p>
          <p>Our hands-on workshop that introduced new members to Arduino programming and basic circuit building.</p>
        </li>
      </ul>
    </section>
  );
};

export default PastEvents;
