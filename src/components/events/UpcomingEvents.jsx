import React from 'react';

const UpcomingEvents = () => {
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

  const eventsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  };

  const eventCardStyle = {
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    padding: '2rem',
    border: '1px solid #333',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const eventDateStyle = {
    color: '#4dabf7',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const eventTitleStyle = {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#e2e8f0',
  };

  const eventDescStyle = {
    color: '#a0a0a0',
    lineHeight: '1.6',
    marginBottom: '1rem',
  };

  const eventCategoryStyle = {
    display: 'inline-block',
    padding: '0.3rem 0.8rem',
    backgroundColor: '#1971c2',
    color: 'white',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '500',
  };

  const upcomingEvents = [
    {
      date: 'January 15, 2025',
      title: 'Arduino Workshop for Beginners',
      description: 'Learn the basics of Arduino programming and circuit building. Perfect for newcomers to robotics and electronics.',
      category: 'Workshop',
      time: '2:00 PM - 4:00 PM',
      location: 'Engineering Lab 101'
    },
    {
      date: 'January 22, 2025',
      title: 'Robotics Competition Prep',
      description: 'Intensive preparation session for the upcoming regional robotics competition. Team formation and strategy planning.',
      category: 'Competition',
      time: '10:00 AM - 5:00 PM',
      location: 'Main Auditorium'
    },
    {
      date: 'February 5, 2025',
      title: 'AI in Robotics Seminar',
      description: 'Guest lecture by industry experts on the latest AI applications in modern robotics systems.',
      category: 'Seminar',
      time: '3:00 PM - 5:00 PM',
      location: 'Conference Hall A'
    },
    {
      date: 'February 12, 2025',
      title: 'Build Your First Robot',
      description: 'Hands-on workshop where participants will build and program their very first robot from scratch.',
      category: 'Workshop',
      time: '1:00 PM - 6:00 PM',
      location: 'Robotics Lab'
    },
    {
      date: 'February 20, 2025',
      title: 'Tech Talk: Future of Automation',
      description: 'Industry professionals discuss the future trends in automation and robotics technology.',
      category: 'Tech Talk',
      time: '4:00 PM - 6:00 PM',
      location: 'Virtual Event'
    },
    {
      date: 'March 1, 2025',
      title: 'Inter-College Robotics Championship',
      description: 'Annual championship featuring teams from colleges across the region competing in various robotics challenges.',
      category: 'Competition',
      time: '9:00 AM - 8:00 PM',
      location: 'Sports Complex'
    }
  ];

  return (
    <section style={sectionStyle}>
      <h3 style={h3Style}>
        Upcoming Events
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
      
      <div style={eventsGridStyle}>
        {upcomingEvents.map((event, index) => (
          <div 
            key={index} 
            style={eventCardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(77, 171, 247, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={eventDateStyle}>{event.date}</div>
            <h4 style={eventTitleStyle}>{event.title}</h4>
            <p style={eventDescStyle}>{event.description}</p>
            <div style={{marginBottom: '1rem'}}>
              <div style={{color: '#a0a0a0', fontSize: '0.9rem', marginBottom: '0.3rem'}}>
                <strong>Time:</strong> {event.time}
              </div>
              <div style={{color: '#a0a0a0', fontSize: '0.9rem', marginBottom: '1rem'}}>
                <strong>Location:</strong> {event.location}
              </div>
            </div>
            <span style={eventCategoryStyle}>{event.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
