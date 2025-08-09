import React from 'react';

const Hero = () => {
  const heroStyle = {
    padding: '4rem 2rem',
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const h2Style = {
    fontSize: '2.5rem',
    margin: '0 0 1rem 0'
  };

  const pStyle = {
    fontSize: '1.2rem',
    maxWidth: '700px',
    margin: '0 auto'
  };

  return (
    <section style={heroStyle}>
      <h2 style={h2Style}>Welcome to the Robotics Club!</h2>
      <p style={pStyle}>
        This is the official website for the college robotics club. We are a community of innovators, builders, and problem-solvers.
        Explore our projects, learn about our members, and find out about upcoming events.
      </p>
    </section>
  );
};

export default Hero;