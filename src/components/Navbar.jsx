import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'navbar-open' : ''}`}>
      <img 
        src={isOpen ? "/assets/image5-1.png" : "/assets/image 5.png"} 
        alt="Logo" 
        className="image5" 
      />
      <div className={`frame222 ${isOpen ? 'frame222-open' : ''}`}>
          <a href="https://www.youtube.com/channel/UCVYcJj6qHAIOa9zBAnLcnbA" className="social-icon" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/soaron/posts/?feedView=all" className="social-icon" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="0" y="2" width="20" height="20" fill="#000000"/>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#ffffff"/>
            </svg>
          </a>
          <a href="https://x.com/soaronofficial" className="social-icon" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/SoaronOfficial/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#000000"/>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
      </div>
      <div className={`frame221 ${isOpen ? 'frame221-open' : ''}`}>
        <div className="text-products">Products</div>
        <div className="text-build-at-soaron">Build at Soaron</div>
        <div className="text-contact-us">Contact Us</div>
      </div>
      <div className="frame219">
        <div className="frame220">
          <div className="text-menu">Menu</div>
          <div className={`frame218 ${isOpen ? 'frame218-open' : ''}`} onClick={toggleMenu}>
            <div className={`line98 ${isOpen ? 'line98-open' : ''}`}>
            </div>
            <div className={`line97 ${isOpen ? 'line97-open' : ''}`}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
