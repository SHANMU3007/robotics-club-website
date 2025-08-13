import React from 'react';

const NewsAnnouncements = () => {
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

  const h3AfterStyle = {
    content: '""',
    position: 'absolute',
    width: '50%',
    height: '4px',
    bottom: '-10px',
    left: '25%',
    backgroundColor: '#1971c2',
    borderRadius: '2px',
  };

  const newsItems = [
    {
      date: 'October 15, 2025',
      title: 'National Robotics Competition Win',
      description: 'Our team took first place at the National Robotics Championship with our autonomous rover design.',
      category: 'Achievement'
    },
    {
      date: 'November 2, 2025',
      title: 'New AI Workshop Series',
      description: 'Starting this month, we\'ll host weekly workshops on machine learning applications in robotics.',
      category: 'Workshop'
    },
    {
      date: 'December 10, 2025',
      title: 'Industry Partnership Announcement',
      description: 'We\'re proud to announce our new partnership with TechRobotics Inc. for mentorship and equipment.',
      category: 'Partnership'
    }
  ];

  return (
    <section style={sectionStyle}>
      <h3 style={h3Style}>
        Latest Updates
        <span style={h3AfterStyle}></span>
      </h3>
      
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {newsItems.map((item, index) => (
          <div key={index} style={{
            backgroundColor: '#111827',
            padding: '1.5rem',
            borderRadius: '8px',
            borderLeft: '4px solid #1971c2',
            transition: 'transform 0.3s ease',
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '0.5rem',
              alignItems: 'center'
            }}>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item.date}</span>
              <span style={{ 
                backgroundColor: '#1e3a8a',
                color: '#e2e8f0',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.8rem'
              }}>
                {item.category}
              </span>
            </div>
            <h4 style={{ 
              margin: '0.5rem 0', 
              color: '#e2e8f0',
              fontSize: '1.3rem'
            }}>
              {item.title}
            </h4>
            <p style={{ 
              margin: 0, 
              color: '#cbd5e1',
              lineHeight: '1.6'
            }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsAnnouncements;