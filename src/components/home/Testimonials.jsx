import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The Robotics Club transformed my college experience. The practical skills I gained here landed me my dream internship at a leading tech company.",
      author: "Sarah Chen",
      role: "Computer Engineering '24"
    },
    {
      quote: "As a mechanical engineering student, the club gave me hands-on experience that complemented my coursework perfectly. The team projects were invaluable.",
      author: "Michael Rodriguez",
      role: "Mechanical Engineering '25"
    },
    {
      quote: "I never thought I could build a robot from scratch. The mentors here guided me through every step and now I'm leading my own project team!",
      author: "Priya Patel",
      role: "Electrical Engineering '26"
    }
  ];

  return (
    <section style={{
      padding: '4rem 1rem',
      textAlign: 'center',
      background: 'linear-gradient(145deg, #0a0a0a, #1a1a2e)',
    }}>
      <h3 style={{
        fontSize: '2.2rem',
        marginBottom: '3rem',
        color: '#4dabf7',
        position: 'relative',
        display: 'inline-block',
      }}>
        Voices From Our Community
        <span style={{
          content: '""',
          position: 'absolute',
          width: '50%',
          height: '4px',
          bottom: '-10px',
          left: '25%',
          backgroundColor: '#1971c2',
          borderRadius: '2px',
        }}></span>
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={{
            backgroundColor: '#111827',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid #1e3a8a',
            boxShadow: '0 8px 20px rgba(0, 100, 255, 0.1)',
            textAlign: 'left',
          }}>
            <p style={{
              fontStyle: 'italic',
              marginBottom: '1.5rem',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#e2e8f0',
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                fontSize: '3rem',
                color: '#1e3a8a',
                lineHeight: '1',
              }}>"</span>
              {testimonial.quote}
            </p>
            <div>
              <p style={{
                fontWeight: 'bold',
                color: '#e2e8f0',
                margin: '0.25rem 0',
              }}>{testimonial.author}</p>
              <p style={{
                color: '#94a3b8',
                margin: 0,
                fontSize: '0.9rem',
              }}>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;