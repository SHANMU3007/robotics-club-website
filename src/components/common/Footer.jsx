import React from 'react';

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
          color: #f97316;
        }

        .footer-section h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #f97316;
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

        .footer-links li:hover {
          color: #f97316;
        }

        .footer-links .emergency {
          color: #f97316;
          font-weight: 600;
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
            <div className="contact-info">
              <span></span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Faculty Coordinators</h4>
            <ul className="footer-links">
              <li>Emergency Repairs</li>
              <li>Drain Cleaning</li>
              <li>Water Heaters</li>
              <li>Pipe Repair</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Secretry</h4>
            <ul className="footer-links">
              <li>Downtown Area</li>
              <li>Suburbs</li>
              <li>Industrial District</li>
              <li>Surrounding Counties</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li>Mon-Fri: 7AM - 8PM</li>
              <li>Saturday: 8AM - 6PM</li>
              <li>Sunday: 9AM - 5PM</li>
              <li className="emergency">24/7 Emergency Service</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 RBC. All rights reserved. Licensed & Insured.</p>
          <p className="design">
            Designed and Maintained By Saravana M || Shanmuga Patel Kani C
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;