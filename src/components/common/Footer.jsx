import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background-color: #111827;
          color: white;
          padding: 3rem 1rem;
          width: 100%;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #374151;
        }

        .footer-section {
          padding: 0 1rem;
        }

        .footer-section h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #4dabf7;
        }

        .footer-section h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #4dabf7;
        }

        .footer-section p {
          margin-bottom: 1rem;
          color: #d1d5db;
          line-height: 1.5;
        }

        .contact-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #d1d5db;
          margin-top: 1rem;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
          color: #9ca3af;
          transition: color 0.3s ease;
        }

        .footer-links li a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links li a:hover {
          color: #4dabf7;
        }

        .footer-links li:hover {
          color: #4dabf7;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #374151;
          color: white;
          border-radius: 50%;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .social-link:hover {
          background-color: #4dabf7;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 2rem auto 0;
          text-align: center;
          color: #9ca3af;
          font-size: 0.875rem;
        }

        .footer-bottom p {
          margin: 0.5rem 0;
        }

        .design {
          font-size: 0.8rem;
          color: #6b7280;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .footer-section {
            padding: 0;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Robotics Club</h3>
            <p>An innovative club where technology enthusiasts collaborate to design, build, and program robots for learning, research, and competitions.</p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/gallery">Photo Gallery</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/members">Members</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul className="footer-links">
              <li><Link to="/join">Join Our Club</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/gallery">View Activities</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li>📍 Engineering Building, Room 205</li>
              <li>📧 robotics.club@university.edu</li>
              <li>📱 (555) 123-4567</li>
              <li>🕒 Mon-Fri: 9AM - 6PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Robotics Club. All rights reserved.</p>
          <p className="design">
            Designed and Maintained By Saravana M || Shanmuga Patel Kani C
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;