import React from 'react';
import Type from './Type';
import HeaderButton from './HeaderButton';
import '../styles/Header.css';

function Home() {
  return (
    <section id="home" className="home-wrapper">
      {/* Background ambient lighting */}
      <div className="ambient-glow glow-left"></div>
      <div className="ambient-glow glow-right"></div>

      <main className="home-content">
        <div className="home-grid">
          
          {/* Left Text Column */}
          <div className="text-column">
            <span className="eyebrow-text">Digital Agency & Software Studio</span>

            <h1 className="heading-title">
              <span className="title-white">Vurtual</span>{' '}
              <span className="title-blue">Design</span>
            </h1>

            <div className="typewriter-container">
              <span className="type-prefix">We build </span>
              <Type />
            </div>

            <div className="button-wrapper">
              <HeaderButton />
            </div>
          </div>

          {/* Right Column - Sequentially Drawn Multi-Device SVG */}
          <div className="image-column">
            <div className="illustration-wrapper animate-float">
              <svg 
                className="device-illustration-svg" 
                viewBox="0 0 600 450" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. Desktop Monitor (Drawn First) */}
                <g className="device-group device-desktop">
                  <rect className="draw-path" x="50" y="40" width="340" height="220" rx="16" />
                  <rect className="draw-path" x="65" y="55" width="310" height="170" rx="4" />
                  <path className="draw-path" d="M 190 260 L 250 260 L 240 310 L 200 310 Z" />
                  <path className="draw-path" d="M 160 310 L 280 310" />
                </g>

                {/* 2. Tablet (Drawn Second) */}
                <g className="device-group device-tablet">
                  <rect className="draw-path" x="220" y="160" width="220" height="150" rx="14" transform="rotate(-12 220 160)" />
                  <rect className="draw-path" x="232" y="172" width="196" height="126" rx="6" transform="rotate(-12 220 160)" />
                  <circle className="draw-path" cx="425" cy="210" r="4" />
                </g>

                {/* 3. Mobile Phone (Drawn Last) */}
                <g className="device-group device-phone">
                  <rect className="draw-path" x="420" y="180" width="110" height="210" rx="20" />
                  <rect className="draw-path" x="428" y="196" width="94" height="178" rx="10" />
                  <line className="draw-path" x1="460" y1="188" x2="490" y2="188" />
                </g>
              </svg>
            </div>
          </div>

        </div>
      </main>
    </section>
  );
}

export default Home;