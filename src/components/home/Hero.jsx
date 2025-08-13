import React from 'react';
import introVideo from '../../assets/videos/intro.mp4'; // Correct import path

const Hero = () => {
  const heroStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4rem 0',
    gap: '4rem',
    position: 'relative',
  };

  const contentStyle = {
    flex: 1,
    maxWidth: '600px',
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
  };

  const videoContainerStyle = {
    flex: 1,
    maxWidth: '600px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
    aspectRatio: '16/9',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  };

  return (
    <section style={heroStyle}>
      <div style={contentStyle}>
        <h2 style={h2Style}>Innovate. Build. Inspire.</h2>
        <p style={pStyle}>
          Welcome to the premier Robotics Club at our university. We foster creativity and technical 
          excellence through hands-on projects, workshops, and competitions. Join our community of 
          future engineers and innovators.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={buttonStyle}>Join Now</button>
          <button style={{ 
            ...buttonStyle, 
            backgroundColor: 'transparent', 
            border: '2px solid #1971c2',
            color: '#1971c2'
          }}>
            Learn More
          </button>
        </div>
      </div>
      
<div style={videoContainerStyle}>
        <video 
          style={videoStyle} 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Hero;