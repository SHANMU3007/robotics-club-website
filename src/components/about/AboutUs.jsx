import React from 'react';

const AboutUs = () => {
  const containerStyle = {
    padding: '2rem 2rem',
    textAlign: 'center',
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
    <section style={containerStyle}>
      <h3 style={h3Style}>Our Story</h3>
      <p style={pStyle}>
        The Robotics Club was founded in 2020 by a group of engineering students with a shared passion for building
        and programming robots. Since then, we have grown into a vibrant community of over 50 members from various
        departments, including Computer Science, Electrical Engineering, and Mechanical Engineering.
      </p>
    </section>
  );
};

export default AboutUs;
