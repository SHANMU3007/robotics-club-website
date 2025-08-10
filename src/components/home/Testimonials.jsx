import React from 'react';

const Testimonials = () => {
  const testimonialsStyle = {
    padding: '2rem 2rem',
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const h3Style = {
    fontSize: '2rem',
    marginBottom: '2rem'
  };

  const testimonialItemStyle = {
    backgroundColor: '#4a4a4a',
    padding: '2rem',
    borderRadius: '8px',
    margin: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
  };
  
  const quoteStyle = {
    fontStyle: 'italic',
    marginBottom: '1rem'
  };
  
  const authorStyle = {
    fontWeight: 'bold',
    color: '#ccc'
  };

  return (
    <section style={testimonialsStyle}>
      <h3 style={h3Style}>What Our Members Say</h3>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={testimonialItemStyle}>
          <p style={quoteStyle}>"Joining the robotics club was the best decision I made in college. The hands-on experience is incredible!"</p>
          <p style={authorStyle}>- Jane Doe, Member since 2023</p>
        </div>
        <div style={testimonialItemStyle}>
          <p style={quoteStyle}>"The workshops are top-notch and the community is so supportive. I've learned so much about embedded systems."</p>
          <p style={authorStyle}>- John Smith, Team Lead</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
