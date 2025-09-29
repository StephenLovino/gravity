import React from 'react';
import './GravityLandingPage.css';
import SplineScene from './SplineScene';

const GravityLandingPage = () => {
  return (
    <div className="gravity-landing">
      {/* Floating 3D Spline Scene - Fixed Position Across All Sections */}
      <div className="floating-3d-spline">
        <SplineScene />
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line-1">Steph Jobs</span>
              <span className="title-line-2">is Cooking</span>
            </h1>
            <p className="hero-description">
              Crafting revolutionary iPhone designs and innovative mobile experiences. We're cooking up the future of iPhone 18 and beyond with cutting-edge design, breakthrough technology, and user experiences that will change everything.
            </p>
            <button className="cta-button">
              <span>See What's Cooking</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <h2 className="section-title">About Steph Jobs</h2>
            <p className="section-description">
              At Steph Jobs is Cooking, we are on a mission to revolutionize mobile design and create the next generation of iPhones. We are passionate designers, engineers, and innovators who believe that great technology should be intuitive, beautiful, and transformative for users worldwide.
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-number">18+</div>
                <div className="stat-label">iPhone generations designed</div>
              </div>
              <div className="stat-card featured">
                <div className="stat-number">2B+</div>
                <div className="stat-label">devices shipped worldwide</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">~50</div>
                <div className="stat-label">Design Team Members (& growing)</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">25+</div>
                <div className="stat-label">countries with design studios</div>
              </div>
            </div>
            
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-number">2007</div>
                <div className="stat-label">start, mobile revolution</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1,200+</div>
                <div className="stat-label">patents filed for innovation</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">design innovation</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100M+</div>
                <div className="stat-label">users delighted daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iPhone Design Services Section */}
      <section className="market-making-section">
        <div className="background-blob"></div>
        <div className="container">
          <div className="market-making-header">
            <h2 className="section-title">iPhone Design Services</h2>
            <p className="section-description">
              We are a global mobile design innovation platform and iPhone development service. We provide cutting-edge design solutions and revolutionary mobile experiences to users in over 15 countries worldwide.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">iPhone Design for Tech Companies</h3>
              <h4 className="service-subtitle">Accelerate your brand's mobile journey with revolutionary iPhone designs</h4>
              <p className="service-description">
                We invest in building long-term, sustainable relationships and support tech companies in their growth journey with our design expertise, iPhone innovation, and industry network.
              </p>
              <a href="#" className="service-link">
                <span>Learn more</span>
                <svg className="arrow-icon" viewBox="0 0 21 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.3737 9.3488L12.6937 1.29616C12.3356 0.929794 11.7543 0.887239 11.3362 1.25916C10.9631 1.59037 10.9537 2.23798 11.2987 2.59878L17.4639 9.05273H1.80375C1.27311 9.05273 0.84375 9.47646 0.84375 10.0001C0.84375 10.5237 1.27313 10.9475 1.80375 10.9475H17.4639L11.2987 17.4014C10.9537 17.7622 10.9781 18.3932 11.3362 18.7411C11.715 19.1074 12.3412 19.076 12.6937 18.704L20.3737 10.6514C20.5987 10.4331 20.64 10.2221 20.6437 10.0001C20.6437 9.78178 20.5087 9.48944 20.3737 9.3488Z" fill="url(#paint0_linear)" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="0.84375" y1="2.56198" x2="19.0888" y2="19.1484" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#665DCD"/>
                      <stop offset="0.447624" stopColor="#5FA4E6"/>
                      <stop offset="1" stopColor="#D2AB67"/>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>
            
            <div className="charts-visualization">
              <div className="chart-container">
                <div className="chart-item chart-4">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/6d90af4ef62f657ba770a5b64da31f4e9c7fa594?width=248" alt="Bar chart 4" className="bar-img" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/fc723d968f0ae4d7933660c6458298075df8cf86?width=248" alt="Table 4" className="table-img" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/45d3061bae277547230226bedfe4b8e6a6eb91b7?width=200" alt="Shadow 4" className="shadow-img" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/a91a0ed86a0b8cc39486f7118c28dd1e31b147b2?width=108" alt="Token 4" className="token-img" />
                </div>
                <div className="chart-item chart-1">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/6e6730eaac4b28d95c0b5e2031bbc6db9b339697?width=380" alt="Bar chart 1" className="bar-img" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/fc2c38307fa694dfc7fb8868d8a6e131973100ee?width=380" alt="Table 1" className="table-img" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/339a0cdebc28527a68ccd1e8f0c40bfa5282f2bc?width=322" alt="Shadow 1" className="shadow-img" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/352cbf634f98c7e58f7038ec982b65fef1cbd7f9?width=260" alt="Token 1" className="token-img" />
                </div>
                <div className="chart-item chart-2">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/1c3973f6bf613a9b8e1bbd1e8f4b51aebe73155c?width=300" alt="Bar chart 2" className="bar-img" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/0603c3c8e9d5d4e5c2d04d17b2655bf72771db49?width=300" alt="Table 2" className="table-img" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/9e85a436a4754bc8832e3b70e661f7918d727f90?width=240" alt="Shadow 2" className="shadow-img" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/cb4df0e43e945160c450d07d00de11d0e595bf08?width=232" alt="Token 2" className="token-img" />
                </div>
                <div className="chart-item chart-3">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/f3e920db09dc2991ed99ead34e67cd6ff7b8a25e?width=216" alt="Bar chart 3" className="bar-img" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/0e2aef665da12d4573c5c0771941d78592ae4d83?width=216" alt="Table 3" className="table-img" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/45d3061bae277547230226bedfe4b8e6a6eb91b7?width=200" alt="Shadow 3" className="shadow-img" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/7a157fce587268a4c9b046e38a39ec179169da1e?width=172" alt="Token 3" className="token-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iPhone Innovation Section */}
      <section className="exchange-services-section">
        <div className="container">
          <div className="services-grid reverse">
            <div className="exchange-visualization">
              <div className="background-gradient"></div>
              <div className="exchange-screens">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/42664ecf5c9db2636f5b2fc9b21a43cc9c6b612e?width=1544" alt="Background" className="background-img" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/0f3e161fe19214532f5294b8331bdd626f1db794?width=1028" alt="Grid" className="grid-img" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/4e0e09998300f1cb462f38c53d779c4db3272382?width=1028" alt="iPhone screens" className="screens-img" />
                
                <div className="exchange-logos">
                  <div className="exchange-logo binance">
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/645b39b1e473e312c97ded5a0f07557003c46491?width=84" alt="iPhone 15 base" className="logo-base" />
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/e964c310be2110561ffaea2d41115ce17bbba738?width=84" alt="iPhone 15 top" className="logo-top" />
                  </div>
                  <div className="exchange-logo bitkub">
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/45841df20d21a82fef9b83e5dc81d44150e385e6?width=52" alt="iPhone 16 base" className="logo-base" />
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/b66d0c433863a308a65d7a0e7b77d8c9f77e5f81?width=52" alt="iPhone 16 top" className="logo-top" />
                  </div>
                  <div className="exchange-logo bnb">
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/04a2b5eb2e8c08ce044cb03bd5dc34a5582b2cea?width=100" alt="iPhone 17 base" className="logo-base" />
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/90b18d904004c80dac378c367b6b88877e5a625b?width=100" alt="iPhone 17 top" className="logo-top" />
                  </div>
                  <div className="exchange-logo solana">
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/a5f5e9f4108c0ef982fa1809f655b1af4d4b472a?width=52" alt="iPhone 18 base" className="logo-base" />
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/b863f3bd1d3ac3523e870e894e38649fa4e97444?width=52" alt="iPhone 18 top" className="logo-top" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="service-card">
              <h3 className="service-title">iPhone Design for Mobile Companies</h3>
              <h4 className="service-subtitle">Attract more users with revolutionary iPhone designs & innovation</h4>
              <p className="service-description">
                Our world-class iPhone design services are proven to help mobile companies and tech businesses attract users and gain market-leading positions with up to 90% user satisfaction.
              </p>
              <a href="#" className="service-link">
                <span>Learn more</span>
                <svg className="arrow-icon" viewBox="0 0 21 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.9831 9.3488L12.3031 1.29616C11.945 0.929794 11.3637 0.887239 10.9456 1.25916C10.5725 1.59037 10.5631 2.23798 10.9081 2.59878L17.0732 9.05273H1.41313C0.882487 9.05273 0.453125 9.47646 0.453125 10.0001C0.453125 10.5237 0.882501 10.9475 1.41313 10.9475H17.0732L10.9081 17.4014C10.5631 17.7622 10.5875 18.3932 10.9456 18.7411C11.3243 19.1074 11.9506 19.076 12.3031 18.704L19.9831 10.6514C20.2081 10.4331 20.2494 10.2221 20.2531 10.0001C20.2531 9.78178 20.1181 9.48944 19.9831 9.3488Z" fill="url(#paint0_linear)" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="partners-background">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/384c576a9c10cd6144628725b37ae2aa961a68a8?width=1658" alt="Background" className="bg-left" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/2e90f8166401002e7c1bd5ecd8751df7eddc2dad?width=192" alt="Solana" className="bg-logo solana" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/61f1ad4bdc1799544d4f1bdfec0bb1f827c3dee3?width=146" alt="Near" className="bg-logo near" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/30b6a398ec727a852453aa247bd434e241362e59?width=144" alt="Mena" className="bg-logo mena" />
        </div>
        
        <div className="container">
          <div className="partners-content">
            <div className="partners-header">
              <h2 className="section-title">Our Design Partners & Collaborators</h2>
            </div>
            
            <div className="partners-grid">
              <div className="partners-column">
                <div className="partner-card">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/1d1a484c69c6d91f89cf060fb95a0519addd0822?width=160" alt="Apple" className="partner-logo" />
                  <span className="partner-name">Apple</span>
                </div>
                <div className="partner-card">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/ef856f76f10071623d9823028d7b851692f740e9?width=160" alt="Samsung" className="partner-logo" />
                  <span className="partner-name">Samsung</span>
                </div>
                <div className="partner-card">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/060657f3e7bad0a2761194536ab0687fde20697c?width=160" alt="Google" className="partner-logo" />
                  <span className="partner-name">Google</span>
                </div>
              </div>
              
              <div className="partners-column offset">
                <div className="partner-card">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/b40219e0ba3d9dc441049fd658210fe3d76d57d0?width=160" alt="Microsoft" className="partner-logo" />
                  <span className="partner-name">Microsoft</span>
                </div>
                <div className="partner-card">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/f24aab239324b756cebc9dbf5a06affa44a406b0?width=160" alt="Meta" className="partner-logo" />
                  <span className="partner-name">Meta</span>
                </div>
                <div className="partner-card">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/5b1b20993b55f290538fe3f36131ab535f43cb4c?width=160" alt="Tesla" className="partner-logo" />
                  <span className="partner-name">Tesla</span>
                </div>
              </div>
              
              <div className="partners-overlay top"></div>
              <div className="partners-overlay bottom"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2 className="section-title">We are in great company</h2>
            <p className="section-description">
              Our design partnerships have delivered incredible value to our iPhone projects and we're excited to share some of their feedback below
            </p>
          </div>
          
          <div className="testimonials-content">
            <div className="testimonial-navigation">
              <button className="nav-button prev">
                <svg viewBox="0 0 58 58" fill="none">
                  <circle cx="29" cy="29" r="28.5" stroke="url(#gradient)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.14 28.8513L26.6899 20.9352C27.0419 20.575 27.6133 20.5332 28.0244 20.8988C28.3912 21.2244 28.4004 21.861 28.0612 22.2157L22.0006 28.5603H37.3952C37.9169 28.5603 38.339 28.9768 38.339 29.4916C38.339 30.0064 37.9169 30.4229 37.3952 30.4229H22.0006L28.0612 36.7675C28.4004 37.1222 28.3764 37.7425 28.0244 38.0844C27.652 38.4446 27.0364 38.4136 26.6899 38.048L19.14 30.1319C18.9188 29.9172 18.8783 29.7099 18.8746 29.4916C18.8746 29.277 19.0073 28.9896 19.14 28.8513Z" fill="url(#gradient)" />
                </svg>
              </button>
              <button className="nav-button next">
                <svg viewBox="0 0 58 58" fill="none">
                  <circle cx="29" cy="29" r="28.5" stroke="url(#gradient)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M38.86 28.8513L31.3101 20.9352C30.9581 20.575 30.3867 20.5332 29.9756 20.8988C29.6088 21.2244 29.5996 21.861 29.9388 22.2157L35.9994 28.5603H20.6048C20.0831 28.5603 19.661 28.9768 19.661 29.4916C19.661 30.0064 20.0831 30.4229 20.6048 30.4229H35.9994L29.9388 36.7675C29.5996 37.1222 29.6236 37.7425 29.9756 38.0844C30.348 38.4446 30.9636 38.4136 31.3101 38.048L38.86 30.1319C39.0812 29.9172 39.1217 29.7099 39.1254 29.4916C39.1254 29.277 38.9927 28.9896 38.86 28.8513Z" fill="url(#gradient)" />
                </svg>
              </button>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  Since 2019, Steph Jobs is Cooking has been an astounding design partner for Apple. They have proven themselves to be one of the most consistent, committed and driven iPhone designers in our ecosystem. Steph Jobs has contributed high-quality designs and has proven to be a very reliable and trustworthy partner. We strongly advocate Steph Jobs as they have been an indispensable part of our iPhone design team.
                </p>
                <div className="testimonial-author">
                  <div className="author-name">Tim Cook</div>
                  <div className="author-details">
                    <span className="author-title">CEO of Apple Inc.</span>
                    <div className="divider"></div>
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/41dafade2058ba547a0fcb1347f214dd8a3ad6f2?width=247" alt="Apple logo" className="company-logo" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-indicators">
              <span className="indicator active"></span>
              <span className="indicator"></span>
              <span className="indicator"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="join-team-section">
        <div className="container">
          <div className="join-team-content">
            <div className="join-team-visual">
              <div className="visual-background">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/576abae480de1e7bbb58c01013a6d908ce1ec10e?width=1134" alt="Background" className="bg-img-1" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/41fd5230479514b33fb9139d774d7c1ac3b64d99?width=683" alt="Background" className="bg-img-2" />
              </div>
              <h2 className="join-title">Join Steph Jobs</h2>
            </div>
            
            <div className="join-team-text">
              <div className="join-description">
                <p>
                  Join our community of innovators, designers and creators who apply cutting-edge design techniques to make iPhone experiences better for everyone.
                </p>
                <p>
                  As we emphasize it in our name – Steph Jobs is Cooking, we are always cooking up something new. A team of bright, talented people, each masters of their specialty, curious about the world and eager to solve the new exciting iPhone design challenges, build revolutionary products and have fun whilst doing so!
                </p>
              </div>
              <a href="#" className="service-link">
                <span>Learn more about working with us</span>
                <svg className="arrow-icon" viewBox="0 0 21 21" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.1394 9.73942L12.4593 1.68679C12.1012 1.32042 11.52 1.27786 11.1018 1.64978C10.7287 1.98099 10.7193 2.6286 11.0643 2.9894L17.2295 9.44336H1.56938C1.03874 9.44336 0.609375 9.86708 0.609375 10.3907C0.609375 10.9144 1.03875 11.3381 1.56938 11.3381H17.2295L11.0643 17.792C10.7193 18.1529 10.7437 18.7839 11.1018 19.1317C11.4806 19.498 12.1069 19.4666 12.4593 19.0947L20.1394 11.042C20.3644 10.8237 20.4056 10.6128 20.4094 10.3907C20.4094 10.1724 20.2744 9.88006 20.1394 9.73942Z" fill="url(#gradient)" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-background">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/873c87f92508e6fbb4914b0eb6c1746cc7fdbbfd?width=1325" alt="Background" className="bg-img-1" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/17a9a9d7bfdba08d2c154d4fc7c9de1b13c43373?width=648" alt="Background" className="bg-img-2" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/3993518db331f35502a4d16019c9054918b42421?width=1055" alt="Background" className="bg-img-3" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/783bc4c903930238b685d781e852f937b15dfae8?width=648" alt="Background" className="bg-img-4" />
        </div>
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-description">
              We are always open to discuss new value-adding design partnerships. Do reach out if you are a tech company or startup looking for iPhone design innovation; a mobile developer or designer looking to create revolutionary experiences with us or just have a great iPhone idea you can't wait to share with us!
            </p>
            <button className="cta-button">
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GravityLandingPage;
