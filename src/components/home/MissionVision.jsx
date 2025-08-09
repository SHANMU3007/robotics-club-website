import React from 'react';

const MissionVision = () => {
  const mvStyle = {
    padding: '2rem 2rem',
    textAlign: 'center',
    backgroundColor: '#3a3a3a',
    borderRadius: '8px',
    marginBottom: '2rem'
  };

  const h3Style = {
    fontSize: '2rem',
    marginBottom: '1rem'
  };

  const pStyle = {
    fontSize: '1.1rem',
    maxWidth: '800px',
    margin: '0 auto'
  };

  return (
    <section style={mvStyle}>
      <h3 style={h3Style}>Our Mission & Vision</h3>
      <p style={pStyle}>
        Our mission is to inspire students to pursue interests in robotics and technology by providing a collaborative
        environment for learning and development. We envision a future where our members
        are at the forefront of technological innovation.
      </p>
    </section>
  );
};

export default MissionVision;
