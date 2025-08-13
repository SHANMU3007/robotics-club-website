import React from 'react';
import Footer from '../components/common/Footer';
import MemberList from '../components/members/MemberList';
import Header1 from '../components/common/Navbar1';

function Members() {
  const pageWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };
  
  const mainContentStyle = {
    flex: '1',
    padding: '2rem 0'
  };
  
  const containerStyle = {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  return (
    <div style={pageWrapperStyle}>
      <Header1/>
      <main style={mainContentStyle}>
        <div style={containerStyle}>
          <MemberList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Members;
