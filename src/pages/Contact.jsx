import React, { useState } from 'react';
import ContactForm from '../components/contact/ContactForm';
import JoinForm from '../components/join/JoinForm';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');

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
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
  };

  const tabContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
    gap: '0.5rem',
  };

  const tabStyle = {
    padding: '1rem 2rem',
    border: 'none',
    backgroundColor: '#1E1E1E',
    color: '#B0B0B0',
    borderRadius: '12px 12px 0 0',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const activeTabStyle = {
    ...tabStyle,
    backgroundColor: '#4A90E2',
    color: '#FFFFFF',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 20px rgba(74, 144, 226, 0.3)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'start',
  };

  const infoStyle = {
    backgroundColor: '#1E1E1E',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: '1px solid #4A90E2',
    height: 'fit-content',
  };

  const titleStyle = {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#E0E0E0',
    marginBottom: '1.5rem',
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#282828',
    borderRadius: '8px',
  };

  const iconStyle = {
    fontSize: '1.5rem',
    width: '40px',
    textAlign: 'center',
  };

  const contactTextStyle = {
    color: '#B0B0B0',
  };

  const contactLabelStyle = {
    fontWeight: '600',
    color: '#E0E0E0',
    marginBottom: '0.25rem',
  };

  const hoursStyle = {
    marginTop: '2rem',
  };

  const hoursTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#E0E0E0',
    marginBottom: '1rem',
  };

  const hourItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #4A90E2',
  };

  const dayStyle = {
    fontWeight: '500',
    color: '#E0E0E0',
  };

  const timeStyle = {
    color: '#B0B0B0',
  };

  const socialStyle = {
    marginTop: '2rem',
  };

  const socialTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#E0E0E0',
    marginBottom: '1rem',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '1rem',
  };

  const socialLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    backgroundColor: '#4A90E2',
    color: 'white',
    borderRadius: '50%',
    textDecoration: 'none',
    fontSize: '1.25rem',
    transition: 'background-color 0.2s ease',
  };

  const benefitStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '1.5rem',
  };

  const benefitIconStyle = {
    fontSize: '1.5rem',
    width: '40px',
    textAlign: 'center',
    marginTop: '0.25rem',
  };

  const benefitContentStyle = {
    flex: 1,
  };

  const benefitTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#E0E0E0',
    marginBottom: '0.5rem',
  };

  const benefitDescriptionStyle = {
    color: '#B0B0B0',
    fontSize: '0.875rem',
    lineHeight: '1.5',
  };

  const requirementsStyle = {
    marginTop: '2rem',
  };

  const requirementsTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#E0E0E0',
    marginBottom: '1rem',
  };

  const requirementItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
    color: '#B0B0B0',
  };

  const checkIconStyle = {
    color: '#61DAFB',
    fontSize: '1rem',
  };

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginTop: '2rem',
  };

  const statStyle = {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#1E1E1E',
    borderRadius: '8px',
    border: '1px solid #4A90E2',
  };

  const statNumberStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#61DAFB',
    marginBottom: '0.25rem',
  };

  const statLabelStyle = {
    fontSize: '0.875rem',
    color: '#B0B0B0',
  };

  const renderContactInfo = () => (
    <div style={infoStyle}>
      <h2 style={titleStyle}>Get in Touch</h2>
      
      <div style={contactItemStyle}>
        <div style={iconStyle}>📍</div>
        <div>
          <div style={contactLabelStyle}>Address</div>
          <div style={contactTextStyle}>
            Engineering Building, Room 205<br />
            University Campus<br />
            City, State 12345
          </div>
        </div>
      </div>

      <div style={contactItemStyle}>
        <div style={iconStyle}>📧</div>
        <div>
          <div style={contactLabelStyle}>Email</div>
          <div style={contactTextStyle}>
            robotics.club@university.edu
          </div>
        </div>
      </div>

      <div style={contactItemStyle}>
        <div style={iconStyle}>📱</div>
        <div>
          <div style={contactLabelStyle}>Phone</div>
          <div style={contactTextStyle}>
            (555) 123-4567
          </div>
        </div>
      </div>

      <div style={hoursStyle}>
        <h3 style={hoursTitleStyle}>Club Hours</h3>
        <div style={hourItemStyle}>
          <span style={dayStyle}>Monday - Friday</span>
          <span style={timeStyle}>9:00 AM - 6:00 PM</span>
        </div>
        <div style={hourItemStyle}>
          <span style={dayStyle}>Saturday</span>
          <span style={timeStyle}>10:00 AM - 4:00 PM</span>
        </div>
        <div style={hourItemStyle}>
          <span style={dayStyle}>Sunday</span>
          <span style={timeStyle}>Closed</span>
        </div>
      </div>

      <div style={socialStyle}>
        <h3 style={socialTitleStyle}>Follow Us</h3>
        <div style={socialLinksStyle}>
          <a href="#" style={socialLinkStyle}>📘</a>
          <a href="#" style={socialLinkStyle}>🐦</a>
          <a href="#" style={socialLinkStyle}>📷</a>
          <a href="#" style={socialLinkStyle}>💼</a>
        </div>
      </div>
    </div>
  );

  const renderJoinInfo = () => (
    <div style={infoStyle}>
      <h2 style={titleStyle}>Why Join Us?</h2>
      
      <div style={benefitStyle}>
        <div style={benefitIconStyle}>🚀</div>
        <div style={benefitContentStyle}>
          <h3 style={benefitTitleStyle}>Hands-on Experience</h3>
          <p style={benefitDescriptionStyle}>
            Work on real robotics projects and gain practical skills that 
            will help you in your career.
          </p>
        </div>
      </div>

      <div style={benefitStyle}>
        <div style={benefitIconStyle}>👥</div>
        <div style={benefitContentStyle}>
          <h3 style={benefitTitleStyle}>Team Collaboration</h3>
          <p style={benefitDescriptionStyle}>
            Work with like-minded students and develop teamwork skills 
            essential for engineering projects.
          </p>
        </div>
      </div>

      <div style={benefitStyle}>
        <div style={benefitIconStyle}>🏆</div>
        <div style={benefitContentStyle}>
          <h3 style={benefitTitleStyle}>Competition Opportunities</h3>
          <p style={benefitDescriptionStyle}>
            Participate in robotics competitions and showcase your skills 
            on a national level.
          </p>
        </div>
      </div>

      <div style={benefitStyle}>
        <div style={benefitIconStyle}>💡</div>
        <div style={benefitContentStyle}>
          <h3 style={benefitTitleStyle}>Innovation & Creativity</h3>
          <p style={benefitDescriptionStyle}>
            Express your creativity by designing and building unique 
            robotic solutions to real-world problems.
          </p>
        </div>
      </div>

      <div style={benefitStyle}>
        <div style={benefitIconStyle}>🔧</div>
        <div style={benefitContentStyle}>
          <h3 style={benefitTitleStyle}>Access to Equipment</h3>
          <p style={benefitDescriptionStyle}>
            Use our advanced robotics lab with 3D printers, laser cutters, 
            and professional tools.
          </p>
        </div>
      </div>

      <div style={benefitStyle}>
        <div style={benefitIconStyle}>🌐</div>
        <div style={benefitContentStyle}>
          <h3 style={benefitTitleStyle}>Industry Connections</h3>
          <p style={benefitDescriptionStyle}>
            Network with professionals and companies in the robotics industry.
          </p>
        </div>
      </div>

      <div style={requirementsStyle}>
        <h3 style={requirementsTitleStyle}>Requirements</h3>
        <div style={requirementItemStyle}>
          <span style={checkIconStyle}>✓</span>
          <span>Currently enrolled student</span>
        </div>
        <div style={requirementItemStyle}>
          <span style={checkIconStyle}>✓</span>
          <span>Interest in robotics and technology</span>
        </div>
        <div style={requirementItemStyle}>
          <span style={checkIconStyle}>✓</span>
          <span>Commitment to attend meetings</span>
        </div>
        <div style={requirementItemStyle}>
          <span style={checkIconStyle}>✓</span>
          <span>Willingness to learn and collaborate</span>
        </div>
      </div>

      <div style={statsStyle}>
        <div style={statStyle}>
          <div style={statNumberStyle}>50+</div>
          <div style={statLabelStyle}>Active Members</div>
        </div>
        <div style={statStyle}>
          <div style={statNumberStyle}>15+</div>
          <div style={statLabelStyle}>Projects Completed</div>
        </div>
        <div style={statStyle}>
          <div style={statNumberStyle}>5+</div>
          <div style={statLabelStyle}>Competition Wins</div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={pageWrapperStyle}>
      <Navbar />
      <main style={mainContentStyle}>
        <div style={containerStyle}>
            <div style={tabContainerStyle}>
              <button
                style={activeTab === 'contact' ? activeTabStyle : tabStyle}
                onClick={() => setActiveTab('contact')}
              >
                📞 Contact Us
              </button>
              <button
                style={activeTab === 'join' ? activeTabStyle : tabStyle}
                onClick={() => setActiveTab('join')}
              >
                🤝 Join Our Club
              </button>
            </div>

            <div style={gridStyle}>
              {activeTab === 'contact' ? renderContactInfo() : renderJoinInfo()}
              {activeTab === 'contact' ? <ContactForm /> : <JoinForm />}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
