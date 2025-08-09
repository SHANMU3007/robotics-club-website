import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import UpcomingEvents from '../components/event/UpcomingEvents';
import PastEvents from '../components/event/PastEvents';

// This is the Events page component. It assembles the Header,
// Footer, and the dedicated event components to form a complete page.
function Events() {
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
          <UpcomingEvents />
          <PastEvents />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Events;
