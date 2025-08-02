import React, { useEffect } from 'react';
import './SprayLandingPage.css';
import Navbar from './Navbar';
import Roller1 from './Roller1';
import Roller2 from './Roller2';
import Footer from './Footer';

const SprayLandingPage = () => {
  useEffect(() => {
    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top immediately and after a short delay
    window.scrollTo(0, 0);
    
    // Additional scroll to top after component fully renders
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="spray-container">
      <Navbar />
      <Roller1 />
      <Roller2 />
      <video src="/assets/Colorown Spray Testing Video.mp4" alt="image25" className="image25" autoPlay muted loop />
      <div className="rectangle-31"></div>
      <div className="vector30"></div>
      <div className="vector30-2"></div>
      <div className="vector"></div>
      <div className="vector-2"></div>
      <div className="vector-3"></div>
      <div className="vector-4"></div>
      <div className="vector-5"></div>
      <div className="vector-6"></div>
      <Footer />
    </div>
  );
};

export default SprayLandingPage;
