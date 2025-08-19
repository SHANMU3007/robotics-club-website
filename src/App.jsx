import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Members from './pages/Members';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Achievements from './pages/Achievements';
import Team from './pages/Team';

// The main App component handles the routing for your single-page application.
// It uses react-router-dom to display the correct page based on the URL path.
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
