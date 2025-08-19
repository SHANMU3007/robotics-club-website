import React from 'react';
import TeamMemberCard from '../components/team/TeamMemberCard';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Team = () => {
  // Sample team data - you can replace with real data
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Faculty Advisor",
      department: "Mechanical Engineering",
      bio: "Expert in robotics and automation with 15+ years of research experience. Passionate about mentoring students in robotics projects.",
      image: "/src/assets/images/santhosh.jpg",
      skills: ["Robotics", "Automation", "Research", "Mentoring"],
      linkedin: "#",
      github: "#",
      email: "sarah.johnson@university.edu"
    },
    {
      name: "Alex Chen",
      role: "Club President",
      department: "Computer Science",
      bio: "Senior student leading the club with expertise in AI and computer vision. Has won multiple robotics competitions.",
      image: "/src/assets/images/thangarasu.jpg",
      skills: ["AI/ML", "Computer Vision", "Python", "Leadership"],
      linkedin: "#",
      github: "#",
      email: "alex.chen@university.edu"
    },
    {
      name: "Maria Rodriguez",
      role: "Vice President",
      department: "Electrical Engineering",
      bio: "Specializes in circuit design and embedded systems. Manages club projects and coordinates with external partners.",
      image: "/src/assets/images/logo.jpg",
      skills: ["Circuit Design", "Embedded Systems", "Arduino", "Project Management"],
      linkedin: "#",
      github: "#",
      email: "maria.rodriguez@university.edu"
    },
    {
      name: "David Kim",
      role: "Technical Lead",
      department: "Mechanical Engineering",
      bio: "Expert in 3D modeling and mechanical design. Oversees all technical aspects of club projects.",
      image: "/src/assets/images/test.jpg",
      skills: ["3D Modeling", "CAD", "Mechanical Design", "3D Printing"],
      linkedin: "#",
      github: "#",
      email: "david.kim@university.edu"
    },
    {
      name: "Emily Watson",
      role: "Events Coordinator",
      department: "Industrial Engineering",
      bio: "Organizes workshops, competitions, and outreach events. Ensures smooth operation of all club activities.",
      image: "/src/assets/images/1.jpg",
      skills: ["Event Planning", "Workshop Organization", "Communication", "Logistics"],
      linkedin: "#",
      github: "#",
      email: "emily.watson@university.edu"
    },
    {
      name: "James Wilson",
      role: "Competition Team Captain",
      department: "Computer Science",
      bio: "Leads our competition teams and develops strategies for various robotics challenges and tournaments.",
      image: "/src/assets/images/2.jpg",
      skills: ["Competition Strategy", "Team Leadership", "Problem Solving", "Robotics"],
      linkedin: "#",
      github: "#",
      email: "james.wilson@university.edu"
    },
    {
      name: "Lisa Park",
      role: "Outreach Coordinator",
      department: "Biomedical Engineering",
      bio: "Manages community outreach programs and partnerships with local schools and organizations.",
      image: "/src/assets/images/3.jpg",
      skills: ["Community Outreach", "Partnerships", "Education", "Communication"],
      linkedin: "#",
      github: "#",
      email: "lisa.park@university.edu"
    },
    {
      name: "Michael Brown",
      role: "Research Coordinator",
      department: "Robotics Engineering",
      bio: "Coordinates research projects and collaborations with faculty and industry partners.",
      image: "/src/assets/images/4.jpg",
      skills: ["Research", "Collaboration", "Project Coordination", "Innovation"],
      linkedin: "#",
      github: "#",
      email: "michael.brown@university.edu"
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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

  const structureStyle = {
    backgroundColor: '#1E1E1E',
    borderRadius: '16px',
    padding: '2rem',
    marginBottom: '3rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #4A90E2',
  };

  const structureTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#E0E0E0',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const structureGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  };

  const roleStyle = {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#282828',
    borderRadius: '8px',
    border: '1px solid #4A90E2',
  };

  const roleTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#61DAFB',
    marginBottom: '0.5rem',
  };

  const roleDescriptionStyle = {
    fontSize: '0.875rem',
    color: '#B0B0B0',
    lineHeight: '1.5',
  };

  return (
    <div style={pageWrapperStyle}>
      <Navbar />
      <main style={mainContentStyle}>
        <div style={containerStyle}>
            <div style={structureStyle}>
              <h2 style={structureTitleStyle}>Club Structure & Leadership</h2>
              <div style={structureGridStyle}>
                <div style={roleStyle}>
                  <h3 style={roleTitleStyle}>Faculty Advisor</h3>
                  <p style={roleDescriptionStyle}>
                    Provides academic guidance, resources, and industry connections 
                    to support club activities and projects.
                  </p>
                </div>
                <div style={roleStyle}>
                  <h3 style={roleTitleStyle}>Club President</h3>
                  <p style={roleDescriptionStyle}>
                    Overall leadership and strategic direction of the club, 
                    representing the organization to external stakeholders.
                  </p>
                </div>
                <div style_={roleStyle}>
                  <h3 style={roleTitleStyle}>Vice President</h3>
                  <p style={roleDescriptionStyle}>
                    Assists the president and manages internal operations, 
                    project coordination, and member engagement.
                  </p>
                </div>
                <div style={roleStyle}>
                  <h3 style={roleTitleStyle}>Technical Lead</h3>
                  <p style={roleDescriptionStyle}>
                    Oversees technical aspects of projects, ensures quality standards, 
                    and provides technical mentorship to members.
                  </p>
                </div>
                <div style={roleStyle}>
                  <h3 style={roleTitleStyle}>Events Coordinator</h3>
                  <p style={roleDescriptionStyle}>
                    Plans and executes workshops, competitions, and social events 
                    to enhance member experience and community building.
                  </p>
                </div>
                <div style={roleStyle}>
                  <h3 style={roleTitleStyle}>Competition Captain</h3>
                  <p style={roleDescriptionStyle}>
                    Leads competition teams, develops strategies, and coordinates 
                    participation in various robotics challenges.
                  </p>
                </div>
              </div>
            </div>

            <div style={headerStyle}>
              <h2 style={titleStyle}>Meet Our Team</h2>
              <p style={subtitleStyle}>
                Our diverse team brings together expertise from various engineering 
                disciplines to create innovative robotics solutions.
              </p>
            </div>
            
            <div style={gridStyle}>
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
