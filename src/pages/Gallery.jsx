import React from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Gallery = () => {
  // Sample media data - you can replace with real data
  const mediaItems = [
    {
      type: 'image',
      src: '/src/assets/images/1.jpg',
      title: 'Line Follower Robot',
      description: 'Our autonomous line follower robot in action'
    },
    {
      type: 'image',
      src: '/src/assets/images/2.jpg',
      title: 'Robot Arm Assembly',
      description: 'Students working on the robotic arm project'
    },
    {
      type: 'image',
      src: '/src/assets/images/3.jpg',
      title: 'Competition Day',
      description: 'Team preparing for robotics competition'
    },
    {
      type: 'image',
      src: '/src/assets/images/4.jpg',
      title: 'Workshop Session',
      description: 'Learning Arduino programming basics'
    },
    {
      type: 'image',
      src: '/src/assets/images/5.jpg',
      title: '3D Printing Lab',
      description: 'Creating custom robot components'
    },
    {
      type: 'image',
      src: '/src/assets/images/6.jpg',
      title: 'Drone Testing',
      description: 'Testing our autonomous drone system'
    },
    {
      type: 'video',
      src: '/src/assets/videos/intro.mp4',
      title: 'Club Introduction',
      description: 'Welcome to our robotics club'
    },
    {
      type: 'image',
      src: '/src/assets/images/7.jpg',
      title: 'Team Building',
      description: 'Club members collaborating on projects'
    },
    {
      type: 'image',
      src: '/src/assets/images/8.jpg',
      title: 'Circuit Design',
      description: 'Designing electronic circuits for robots'
    },
    {
      type: 'image',
      src: '/src/assets/images/9.jpg',
      title: 'Robot Soccer',
      description: 'Fun robot soccer competition'
    },
    {
      type: 'image',
      src: '/src/assets/images/10.jpg',
      title: 'Award Ceremony',
      description: 'Celebrating our competition wins'
    },
    {
      type: 'image',
      src: '/src/assets/images/11.jpg',
      title: 'Field Trip',
      description: 'Visiting robotics companies'
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

  return (
    <div style={pageWrapperStyle}>
      <Navbar />
      <main style={mainContentStyle}>
        <div style={containerStyle}>
          <GalleryGrid mediaItems={mediaItems} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
