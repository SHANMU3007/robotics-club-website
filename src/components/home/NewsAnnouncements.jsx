import React from 'react';

const NewsAnnouncements = () => {
  const newsStyle = {
    padding: '2rem 2rem',
    marginBottom: '2rem',
    backgroundColor: '#2c2c2c',
    borderRadius: '8px'
  };
  
  const h3Style = {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem'
  };
  
  const newsListStyle = {
    listStyleType: 'none',
    padding: 0
  };
  
  const newsItemStyle = {
    backgroundColor: '#4a4a4a',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px'
  };
  
  const dateStyle = {
    fontSize: '0.9em',
    color: '#ccc'
  };

  return (
    <section style={newsStyle}>
      <h3 style={h3Style}>News & Announcements</h3>
      <ul style={newsListStyle}>
        <li style={newsItemStyle}>
          <h4>Club Wins National Robotics Challenge!</h4>
          <p style={dateStyle}>October 10, 2025</p>
          <p>Our team secured first place in the annual national robotics competition. Congratulations to all members!</p>
        </li>
        <li style={newsItemStyle}>
          <h4>New 3D Printer Arrives</h4>
          <p style={dateStyle}>September 25, 2025</p>
          <p>We are excited to announce the arrival of a new, state-of-the-art 3D printer for all members to use for their projects.</p>
        </li>
      </ul>
    </section>
  );
};

export default NewsAnnouncements;
