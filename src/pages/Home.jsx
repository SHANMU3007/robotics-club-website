import React from 'react';
import Header from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/home/Hero'
import MissionVision from '../components/home/MissionVision';
import Testimonials from '../components/home/Testimonials';
import NewsAnnouncements from '../components/home/NewsAnnouncements';

function Home() {
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
          <Hero />
          <MissionVision />
          <Testimonials />
          <NewsAnnouncements />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
