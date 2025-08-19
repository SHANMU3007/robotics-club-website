import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Members = () => {
  // Sample member data - you can replace with real data
  const members = [
    {
      name: "Alex Chen",
      role: "President",
      department: "Computer Science",
      year: "4th Year",
      image: "/src/assets/images/thangarasu.jpg"
    },
    {
      name: "Maria Rodriguez",
      role: "Vice President",
      department: "Electrical Engineering",
      year: "3rd Year",
      image: "/src/assets/images/logo.jpg"
    },
    {
      name: "David Kim",
      role: "Technical Lead",
      department: "Mechanical Engineering",
      year: "4th Year",
      image: "/src/assets/images/test.jpg"
    },
    {
      name: "Emily Watson",
      role: "Events Coordinator",
      department: "Industrial Engineering",
      year: "3rd Year",
      image: "/src/assets/images/1.jpg"
    },
    {
      name: "James Wilson",
      role: "Competition Captain",
      department: "Computer Science",
      year: "4th Year",
      image: "/src/assets/images/2.jpg"
    },
    {
      name: "Lisa Park",
      role: "Outreach Coordinator",
      department: "Biomedical Engineering",
      year: "3rd Year",
      image: "/src/assets/images/3.jpg"
    },
    {
      name: "Michael Brown",
      role: "Research Coordinator",
      department: "Robotics Engineering",
      year: "4th Year",
      image: "/src/assets/images/4.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Member",
      department: "Computer Science",
      year: "2nd Year",
      image: "/src/assets/images/5.jpg"
    },
    {
      name: "Robert Davis",
      role: "Member",
      department: "Electrical Engineering",
      year: "2nd Year",
      image: "/src/assets/images/6.jpg"
    },
    {
      name: "Jennifer Lee",
      role: "Member",
      department: "Mechanical Engineering",
      year: "1st Year",
      image: "/src/assets/images/7.jpg"
    },
    {
      name: "Christopher Wang",
      role: "Member",
      department: "Computer Science",
      year: "1st Year",
      image: "/src/assets/images/8.jpg"
    },
    {
      name: "Amanda Garcia",
      role: "Member",
      department: "Industrial Engineering",
      year: "2nd Year",
      image: "/src/assets/images/9.jpg"
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    padding: '2rem 0',
  };

  const memberCardStyle = {
    backgroundColor: '#1E1E1E',
    borderRadius: '16px',
    padding: '1.5rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #4A90E2',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  };

  const memberImageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '0 auto 1rem',
    border: '4px solid #4A90E2',
  };

  const memberNameStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#E0E0E0',
    marginBottom: '0.5rem',
  };

  const memberRoleStyle = {
    color: '#61DAFB',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  };

  const memberInfoStyle = {
    color: '#B0B0B0',
    fontSize: '0.875rem',
    marginBottom: '0.25rem',
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
                <div style={statNumberStyle}>{members.length}</div>
                <div style={statLabelStyle}>Total Members</div>
              </div>
              <div style={statStyle}>
                <div style={statNumberStyle}>6</div>
                <div style={statLabelStyle}>Departments</div>
              </div>
              <div style={statStyle}>
                <div style={statNumberStyle}>4</div>
                <div style={statLabelStyle}>Academic Years</div>
              </div>
              <div style={statStyle}>
                <div style={statNumberStyle}>8</div>
                <div style={statLabelStyle}>Leadership Roles</div>
              </div>
            </div>

            <div style={gridStyle}>
              {members.map((member, index) => (
                <div key={index} style={memberCardStyle} className="hover:shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={memberImageStyle}
                  />
                  <h3 style={memberNameStyle}>{member.name}</h3>
                  <p style={memberRoleStyle}>{member.role}</p>
                  <p style={memberInfoStyle}>{member.department}</p>
                  <p style={memberInfoStyle}>{member.year}</p>
                </div>
              ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Members;
