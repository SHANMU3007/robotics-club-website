import React from 'react';

const Goals = () => {
  const goalsStyle = {
    padding: '2rem 2rem',
    marginBottom: '2rem'
  };

  const h3Style = {
    fontSize: '2rem',
    marginBottom: '1rem',
    textAlign: 'center'
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    maxWidth: '800px',
    margin: '0 auto'
  };
  
  const listItemStyle = {
    backgroundColor: '#4a4a4a',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
  };
  
  const iconStyle = {
    marginRight: '0.5rem',
    color: '#00c3ff'
  };

  return (
    <section style={goalsStyle}>
      <h3 style={h3Style}>Our Goals</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={iconStyle}>🤖</span> To participate in national and international robotics competitions.</li>
        <li style={listItemStyle}><span style={iconStyle}>💡</span> To organize workshops and seminars to teach technical skills.</li>
        <li style={listItemStyle}><span style={iconStyle}>🤝</span> To foster a collaborative and inclusive environment for all members.</li>
        <li style={listItemStyle}><span style={iconStyle}>💻</span> To contribute to open-source robotics projects.</li>
      </ul>
    </section>
  );
};

export default Goals;
