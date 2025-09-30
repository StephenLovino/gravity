import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand">
          <img className="brand-logo" src="/hero-avatar.jpg" alt="Steph Jobs" />
        </a>
        <a href="#contact" className="header-cta">
          <span className="cta-bg" aria-hidden="true" />
          <span className="cta-label">Get In Touch</span>
        </a>
      </div>
    </header>
  );
};

export default Header;


