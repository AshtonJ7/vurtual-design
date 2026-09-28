import React  from 'react';
import '../styles/About.css';
import { Link } from "react-router-dom";


const servicesList = [
  {
    icon: '⚡',
    title: 'Custom Web Development',
    description: 'Blazing-fast, responsive web applications built with modern frameworks like React and custom styling tailored to your brand.'
  },
  {
    icon: '🎨',
    title: 'UI/UX & Brand Design',
    description: 'User-centered interfaces designed in Figma, crafted to maximize conversions and deliver an intuitive user experience.'
  },
  {
    icon: '🚀',
    title: 'Performance & SEO Optimization',
    description: 'Optimization for Core Web Vitals, speed, and search engines to get your business ranking higher and loading instantly.'
  },
  {
    icon: '🛠️',
    title: 'Maintenance & Ongoing Support',
    description: 'Continuous security updates, feature additions, and proactive monitoring so your site remains flawless.'
  }
];

const processSteps = [
  { step: '01', title: 'Discovery', text: 'We align on your goals, target audience, and functional requirements.' },
  { step: '02', title: 'Design & Prototype', text: 'Interactive wireframes and high-fidelity visual UI designs for approval.' },
  { step: '03', title: 'Development', text: 'Clean, accessible, and scalable code built to modern web standards.' },
  { step: '04', title: 'Launch & Support', text: 'Rigorous testing followed by deployment and post-launch maintenance.' }
];

function About() {
  return (
    <div className='about-page'>
        {/* Background ambient lighting */}
        <div className="ambient-glow glow-top-left"></div>
        <div className="ambient-glow glow-top-right"></div>

        {/* Animated Vertical Squiggle SVG */}
      <div className="background-squiggle-wrapper">
        <svg 
          className="drawn-squiggle" 
          viewBox="0 0 100 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="squiggle-path"
            d="M 50 0 C 90 100, 10 200, 50 300 C 90 400, 10 500, 50 600 C 90 700, 10 750, 50 800"
            stroke="#38bdf8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      
    <div className="services-about-page">
      {/* 1. Hero / Intro */}
         


      <section className="sa-hero">
        <h1 className="sa-hero-title">Where Ideas Become Reality</h1>
        <p className="sa-hero-lead">
          Briding the gap between high-end aesthetics and high perfomance engineering.
          Vurtual Design is a web design & software development agency, here to elevate your buisiness digital presence. 
        </p>
      </section>

      {/* 2. Story & Stats (About Us Section) */}
      <section className="sa-about-grid">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Founded on the principle that modern businesses deserve bespoke digital solutions, we stay 
            away from generic templates. Every line of code and every pixel is crafted to give your business 
            a distinct competitive edge online.
          </p>
        </div>

        <div className="stats-cards">
          <div className="stat-card">
            <h3>100%</h3>
            <p>Custom Built Code</p>
          </div>
          <div className="stat-card">
            <h3>&lt; 1s</h3>
            <p>Target Load Speed</p>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="sa-services">
        <div className="section-header text-center">
          <span className="eyebrow-text">What We Do</span>
          <h2>Our Core Capabilities</h2>
        </div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Development Process */}
      <section className="sa-process">
        <div className="section-header text-center">
          <span className="eyebrow-text">Our Workflow</span>
          <h2>How We Bring Ideas To Life</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((item, index) => (
            <div key={index} className="process-card">
              <span className="step-number">{item.step}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

{/* 5. CTA Section */}
      <section className="sa-cta text-center">
        <h2>Ready to build something exceptional?</h2>
        <p className="sa-cta-subtext">
          Let’s discuss your vision and build a custom digital solution for your business.
        </p>
        <div className="cta-button-group mt-4">
           <Link to="/contact">
          <button className="cta-btn cta-btn-primary">Contact Us</button>  
        </Link>
          <Link to="/projects">
         <button target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-secondary">  View our Work </button>   
       </Link>
        </div>
      </section>
    </div>
    </div>
  );
}

export default About;