import React from 'react';

const AchievementCard = ({ achievement }) => {
  const cardStyle = {
    backgroundColor: '#1E1E1E',
    borderRadius: '16px',
    padding: '1.5rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #4A90E2',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  const ribbonStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: achievement.rank === 1 ? '#fbbf24' : 
                    achievement.rank === 2 ? '#9ca3af' : 
                    achievement.rank === 3 ? '#f59e0b' : '#10b981',
    color: 'white',
    padding: '0.25rem 1rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    borderBottomLeftRadius: '8px',
  };

  const iconStyle = {
    width: '60px',
    height: '60px',
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    fontSize: '1.5rem',
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#E0E0E0',
    marginBottom: '0.5rem',
  };

  const competitionStyle = {
    color: '#B0B0B0',
    fontSize: '0.875rem',
    marginBottom: '0.5rem',
    fontWeight: '500',
  };

  const descriptionStyle = {
    color: '#B0B0B0',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    marginBottom: '1rem',
  };

  const teamStyle = {
    backgroundColor: '#282828',
    color: '#E0E0E0',
    padding: '0.25rem 0.75rem',
    borderRadius: '6px',
    fontSize: '0.75rem',
    fontWeight: '500',
    display: 'inline-block',
    marginRight: '0.5rem',
  };

  const dateStyle = {
    color: '#B0B0B0',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };

  return (
    <div style={cardStyle} className="hover:shadow-lg">
      {achievement.rank && (
        <div style={ribbonStyle}>
          {achievement.rank === 1 ? '🥇 1st' : 
           achievement.rank === 2 ? '🥈 2nd' : 
           achievement.rank === 3 ? '🥉 3rd' : `${achievement.rank}th`}
        </div>
      )}
      
      <div style={iconStyle}>
        {achievement.icon}
      </div>
      
      <h3 style={titleStyle}>{achievement.title}</h3>
      <p style={competitionStyle}>{achievement.competition}</p>
      <p style={descriptionStyle}>{achievement.description}</p>
      
      <div>
        <span style={teamStyle}>{achievement.team}</span>
        {achievement.category && (
          <span style={teamStyle}>{achievement.category}</span>
        )}
      </div>
      
      <div style={dateStyle}>{achievement.date}</div>
    </div>
  );
};

export default AchievementCard;