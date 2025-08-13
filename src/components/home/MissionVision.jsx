import React from 'react';

const MissionVision = () => {
  const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  };

  const cardStyle = {
    padding: '2.5rem',
    borderRadius: '12px',
    background: 'linear-gradient(145deg, #0f0f0f, #1a1a2e)',
    border: '1px solid #1e3a8a',
    boxShadow: '0 8px 20px rgba(0, 100, 255, 0.08)',
  };

  const h3Style = {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    color: '#4dabf7',
  };

  const pStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#e2e8f0',
  };

  return (
    <section style={sectionStyle}>
      <div style={cardStyle}>
        <h3 style={h3Style}>Our Mission</h3>
        <p style={pStyle}>
          To empower students with technical skills through robotics, fostering innovation and 
          problem-solving abilities that prepare them for real-world challenges in technology 
          and engineering.
        </p>
      </div>
      <div style={cardStyle}>
        <h3 style={h3Style}>Our Vision</h3>
        <p style={pStyle}>
          To be recognized as a premier student organization that develops future leaders in 
          robotics and automation, contributing to technological advancements that benefit society.
        </p>
      </div>
    </section>
  );
};

export default MissionVision;