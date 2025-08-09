import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AboutUs from '../components/about/AboutUs';
import Goals from '../components/about/Goals';

function About() {
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
      <Header />
      <main style={mainContentStyle}>
        <div style={containerStyle}>
          <AboutUs />
          <Goals />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
