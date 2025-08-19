import React from 'react';

const TeamMemberCard = ({ member }) => {
  const cardStyle = {
    backgroundColor: '#1E1E1E',
    borderRadius: '16px',
    padding: '1.5rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #4A90E2',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '0 auto 1rem',
    border: '4px solid #4A90E2',
  };

  const nameStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#E0E0E0',
    marginBottom: '0.5rem',
  };

  const roleStyle = {
    color: '#61DAFB',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  };

  const departmentStyle = {
    color: '#B0B0B0',
    fontSize: '0.875rem',
    marginBottom: '1rem',
  };

  const bioStyle = {
    color: '#B0B0B0',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    marginBottom: '1rem',
  };

  const skillsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'center',
  };

  const skillStyle = {
    backgroundColor: '#282828',
    color: '#E0E0E0',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '500',
  };

  const socialStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
  };

  const socialLinkStyle = {
    color: '#B0B0B0',
    fontSize: '1.25rem',
    transition: 'color 0.2s ease',
  };

  return (
    <div style={cardStyle} className="hover:shadow-lg">
      <img 
        src={member.image} 
        alt={member.name} 
        style={imageStyle}
      />
      
      <h3 style={nameStyle}>{member.name}</h3>
      <p style={roleStyle}>{member.role}</p>
      <p style={departmentStyle}>{member.department}</p>
      <p style={bioStyle}>{member.bio}</p>
      
      <div style={skillsStyle}>
        {member.skills.map((skill, index) => (
          <span key={index} style={skillStyle}>{skill}</span>
        ))}
      </div>
      
      <div style={socialStyle}>
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
            💼
          </a>
        )}
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
            🔗
          </a>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`} style={socialLinkStyle}>
            ✉️
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;