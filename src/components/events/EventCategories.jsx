import React from 'react';

const EventCategories = () => {
  const sectionStyle = {
    marginBottom: '2rem',
  };

  const h3Style = {
    textAlign: 'center',
    fontSize: '2.2rem',
    marginBottom: '3rem',
    color: '#4dabf7',
    position: 'relative',
    display: 'inline-block',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  const categoriesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  };

  const categoryCardStyle = {
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    padding: '2rem',
    border: '1px solid #333',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
  };

  const iconStyle = {
    fontSize: '3rem',
    marginBottom: '1rem',
    display: 'block',
  };

  const categoryTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#e2e8f0',
  };

  const categoryDescStyle = {
    color: '#a0a0a0',
    lineHeight: '1.6',
    fontSize: '0.95rem',
  };

  const categories = [
    {
      icon: '🔧',
      title: 'Workshops',
      description: 'Hands-on learning sessions covering Arduino, Raspberry Pi, 3D printing, and more.'
    },
    {
      icon: '🏆',
      title: 'Competitions',
      description: 'Local and national robotics competitions to test your skills and creativity.'
    },
    {
      icon: '💡',
      title: 'Tech Talks',
      description: 'Industry experts share insights on latest trends and innovations in robotics.'
    },
    {
      icon: '🎓',
      title: 'Seminars',
      description: 'Educational sessions on robotics theory, AI applications, and career guidance.'
    },
    {
      icon: '🤝',
      title: 'Networking',
      description: 'Meet fellow robotics enthusiasts, alumni, and industry professionals.'
    },
    {
      icon: '🚀',
      title: 'Project Showcases',
      description: 'Present your robotics projects and see amazing work from other members.'
    }
  ];

  return (
    <section style={sectionStyle}>
      <h3 style={h3Style}>
        Event Categories
        <div style={{
          content: '""',
          position: 'absolute',
          width: '50%',
          height: '4px',
          bottom: '-10px',
          left: '25%',
          backgroundColor: '#1971c2',
          borderRadius: '2px',
        }}></div>
      </h3>
      
      <div style={categoriesGridStyle}>
        {categories.map((category, index) => (
          <div 
            key={index} 
            style={categoryCardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(77, 171, 247, 0.1)';
              e.currentTarget.style.borderColor = '#4dabf7';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#333';
            }}
          >
            <span style={iconStyle}>{category.icon}</span>
            <h4 style={categoryTitleStyle}>{category.title}</h4>
            <p style={categoryDescStyle}>{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCategories;
