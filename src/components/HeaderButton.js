import React from 'react'
import { Link } from 'react-router-dom';


const HeaderButton = () => {
    return (
      <>
        <div className="cta">
          <div className="mx-auto">
            <Link to="/about">
              <button className="cta-about">Services</button>
            </Link>
            <Link to="/projects">
              <button className="cta-portfolio">Our Work</button>
            </Link>
          </div>
        </div>
      </>
    );
  };
  

export default HeaderButton
