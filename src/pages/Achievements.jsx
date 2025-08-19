import React from 'react';
import AchievementCard from '../components/achievements/AchievementCard';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Achievements = () => {
  // Sample achievement data - you can replace with real data
  const achievements = [
    {
      icon: "🏆",
      title: "First Place - National Robotics Competition",
      competition: "National Robotics Championship 2024",
      description: "Our autonomous robot won first place in the line following and obstacle avoidance challenge.",
      team: "Team Alpha",
      category: "Autonomous Navigation",
      rank: 1,
      date: "March 2024"
    },
    {
      icon: "🥈",
      title: "Second Place - Drone Racing Competition",
      competition: "Inter-University Drone Racing 2024",
      description: "Competed against 20+ universities in high-speed drone racing with obstacle courses.",
      team: "Team Beta",
      category: "Drone Racing",
      rank: 2,
      date: "February 2024"
    },
    {
      icon: "🥉",
      title: "Third Place - Robot Soccer Tournament",
      competition: "RoboCup Junior 2024",
      description: "Our robot soccer team demonstrated excellent coordination and strategic gameplay.",
      team: "Team Gamma",
      category: "Robot Soccer",
      rank: 3,
      date: "January 2024"
    },
    {
      icon: "🏅",
      title: "Innovation Award - Smart Agriculture Challenge",
      competition: "Tech Innovation Summit 2024",
      description: "Received special recognition for our innovative approach to automated farming solutions.",
      team: "Team Delta",
      category: "Innovation",
      date: "December 2023"
    },
    {
      icon: "🎯",
      title: "Best Design - 3D Printing Challenge",
      competition: "Maker Faire 2023",
      description: "Awarded for the most creative and functional 3D printed robot components.",
      team: "Team Epsilon",
      category: "Design",
      date: "November 2023"
    },
    {
      icon: "🚀",
      title: "Excellence in Programming - Code Competition",
      competition: "Hackathon 2023",
      description: "Demonstrated exceptional coding skills in robot control algorithms and AI implementation.",
      team: "Team Zeta",
      category: "Programming",
      date: "October 2023"
    },
    {
      icon: "🔬",
      title: "Research Grant - AI Robotics Project",
      competition: "University Research Foundation",
      description: "Received $10,000 grant for developing AI-powered robot navigation systems.",
      team: "Research Team",
      category: "Research",
      date: "September 2023"
    },
    {
      icon: "🌍",
      title: "International Recognition - Global Robotics Expo",
      competition: "World Robotics Conference 2023",
      description: "Our project was featured in the international robotics exhibition.",
      team: "Team Theta",
      category: "International",
      date: "August 2023"
    }
  ];

  const pageWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#121212',
    color: '#e0e0e0',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const mainContentStyle = {
    flex: '1',
    padding: '3rem 0',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    padding: '2rem 0',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#E0E0E0',
    marginBottom: '1rem',
  };

  const subtitleStyle = {
    fontSize: '1.125rem',
    color: '#B0B0B0',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  };

  const statStyle = {
    backgroundColor: '#1E1E1E',
    padding: '2rem',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #4A90E2',
  };

  const statNumberStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#61DAFB',
    marginBottom: '0.5rem',
  };

  const statLabelStyle = {
    fontSize: '1rem',
    color: '#B0B0B0',
    fontWeight: '500',
  };

  return (
    <div style={pageWrapperStyle}>
      <Navbar />
      <main style={mainContentStyle}>
        <div style={containerStyle}>
            <div style={statsStyle}>
              <div style={statStyle}>
                <div style={statNumberStyle}>25+</div>
                <div style={statLabelStyle}>Competitions Entered</div>
              </div>
              <div style={statStyle}>
                <div style={statNumberStyle}>15+</div>
                <div style={statLabelStyle}>Awards Won</div>
              </div>
              <div style={statStyle}>
                <div style={statNumberStyle}>8+</div>
                <div style={statLabelStyle}>Years of Excellence</div>
              </div>
              <div style={statStyle}>
                <div style={statNumberStyle}>100+</div>
                <div style={statLabelStyle}>Students Impacted</div>
              </div>
            </div>

            <div style={headerStyle}>
              <h2 style={titleStyle}>Competition Results & Awards</h2>
              <p style={subtitleStyle}>
                From local competitions to international recognition, our team has 
                consistently demonstrated excellence in robotics and innovation.
              </p>
            </div>
            
            <div style={gridStyle}>
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} achievement={achievement} />
              ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;
