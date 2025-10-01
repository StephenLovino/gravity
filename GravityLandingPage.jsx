import React, { useState, useEffect, useCallback } from 'react';
import './GravityLandingPage.css';
import PureThreeScene from './PureThreeScene';
import Silk from './Silk';

const GravityLandingPage = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowArrow(scrollY > 50); // Show arrow after scrolling down a bit
    };

    window.addEventListener('scroll', handleScroll);
    setShowArrow(true); // Show arrow immediately for testing
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSeeWhatsCooking = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      const el = document.getElementById('mobile-3d');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  return (
    <div className="gravity-landing">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-silk-bg">
          <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-avatar-wrap">
              <img
                className="hero-avatar"
                src="/hero-avatar.jpg"
                alt="Hero avatar"
                loading="eager"
                decoding="async"
              />
            </div>
            <h1 className="hero-title">
              <span className="title-line-1">Steph Jobs</span>
              <span className="title-line-2">is Cooking</span>
            </h1>
            <p className="hero-description">
              Just another day to cook Apple 
            </p>
            <p className="hero-sub-description">
              Drag to rotate • Scroll to zoom
            </p>
            <button className="cta-button" onClick={handleSeeWhatsCooking}>
              <span>See What's Cooking</span>
            </button>
          </div>
        </div>
      </section>

      {/* Floating 3D iPhone Scene - Fixed Position Across All Sections (desktop) */}
      <div className="hero-3d-model">
        <PureThreeScene />
        {/* Interactive Arrow Indicator */}
        <div className={`interactive-arrow ${showArrow ? 'visible' : ''}`}>
          <span className="interactive-arrow-text">Hover & scroll to zoom!</span>
          <svg className="interactive-arrow-icon" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Mobile-only 3D section below the hero */}
      <section className="mobile-3d-section" id="mobile-3d">
        <div className="mobile-silk-bg">
          <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />
        </div>
        <PureThreeScene />
      </section>
    </div>
  );
};

export default GravityLandingPage;