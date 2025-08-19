import React, { useState } from 'react';

const GalleryGrid = ({ mediaItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '1rem',
  };

  const subtitleStyle = {
    fontSize: '1.125rem',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1rem',
  };

  const itemStyle = {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const videoStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
    color: 'white',
    padding: '1rem',
    transform: 'translateY(100%)',
    transition: 'transform 0.3s ease',
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const modalContentStyle = {
    maxWidth: '90%',
    maxHeight: '90%',
    position: 'relative',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '-40px',
    right: '0',
    color: 'white',
    fontSize: '2rem',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Photo & Video Gallery</h2>
        <p style={subtitleStyle}>
          Take a look at our robotics club activities, events, and projects through photos and videos
        </p>
      </div>

      <div style={gridStyle}>
        {mediaItems.map((item, index) => (
          <div
            key={index}
            style={itemStyle}
            onClick={() => handleItemClick(item)}
            className="hover:scale-105"
          >
            {item.type === 'video' ? (
              <video style={videoStyle} muted>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={item.src} alt={item.title} style={imageStyle} />
            )}
            <div style={overlayStyle}>
              <h3 style={{ margin: 0, fontSize: '1rem' }}>{item.title}</h3>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem' }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div style={modalStyle} onClick={closeModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeButtonStyle} onClick={closeModal}>
              ×
            </button>
            {selectedItem.type === 'video' ? (
              <video controls autoPlay style={{ maxWidth: '100%', maxHeight: '100%' }}>
                <source src={selectedItem.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={selectedItem.src} 
                alt={selectedItem.title} 
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
