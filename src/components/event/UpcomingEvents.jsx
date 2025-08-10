import React from 'react';

const UpcomingEvents = () => {
  const upcomingEventsStyle = {
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
    marginBottom: '1.5rem',
    backgroundColor: '#3a3a3a',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
  };
  
  const dateStyle = {
    fontSize: '0.9em',
    color: '#ccc'
  };
  
  const titleStyle = {
    marginTop: 0
  };

  return (
    <section style={upcomingEventsStyle}>
      <h3 style={h3Style}>Upcoming Events</h3>
      <ul style={eventListStyle}>
        <li style={eventItemStyle}>
          <h4 style={titleStyle}>Robo-Wars Competition</h4>
          <p style={dateStyle}>Date: October 15, 2025</p>
          <p>Join us for our annual battle of the bots! Teams will design and build their own combat robots to compete in a series of challenges.</p>
        </li>
        <li style={eventItemStyle}>
          <h4 style={titleStyle}>Intro to ROS (Robot Operating System)</h4>
          <p style={dateStyle}>Date: November 5, 2025</p>
          <p>A workshop for beginners to learn the fundamentals of ROS. No prior experience needed.</p>
        </li>
      </ul>
    </section>
  );
};

export default UpcomingEvents;
