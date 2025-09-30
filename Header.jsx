import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand">
          <img className="brand-logo" src="/images/logo-light.png" alt="Brand" />
        </a>
        <nav className="main-nav" aria-label="Primary">
          <a href="#about" className="nav-link">About Us</a>
          <span className="nav-link nav-services">
            Our Services
            <span className="services-indicator" aria-hidden="true" />
          </span>
          <a href="#work" className="nav-link">Work with Us</a>
          <a href="#blog" className="nav-link">Blog</a>
        </nav>
        <a href="#contact" className="header-cta">
          <span className="cta-bg" aria-hidden="true" />
          <span className="cta-label">Get In Touch</span>
        </a>
      </div>
    </header>
  );
};

export default Header;


