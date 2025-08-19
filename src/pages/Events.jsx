import React from 'react';
import Header from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import EventsHero from '../components/events/EventsHero';
import UpcomingEvents from '../components/events/UpcomingEvents';
import EventCategories from '../components/events/EventCategories';

function Events() {
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

  return (
    <div style={pageWrapperStyle}>
      <Header />
      <main style={mainContentStyle}>
        <div style={containerStyle}>
          <EventsHero />
          <EventCategories />
          <UpcomingEvents />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Events;