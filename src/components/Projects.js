import React from "react";
import '../styles/Projects.css';

const workItems = [
  { id: 1, title: 'Game Corner', image: '/path-to-contour.jpg' },
  { id: 2, title: 'Websites', image: '/path-to-bauhaus.jpg' },
  { id: 2, title: 'Mockups', image: '/path-to-mockups.jpg' },
  { id: 4, title: 'Distorted Beauty', image: '/path-to-distorted.jpg' },
  { id: 5, title: 'Vector Effects', image: '/path-to-vector.jpg' },
  { id: 6, title: '3D Illustrations', image: '/path-to-3d.jpg' },
  { id: 7, title: 'Lifestyle Vectors', image: '/path-to-lifestyle.jpg' },
  { id: 8, title: 'Quiet Luxury', image: '/path-to-quiet.jpg' },
  { id: 9, title: 'Quirky Illustrations', image: '/path-to-quirky.jpg' }
];

function Projects() {
  return (
    <div className="work-page">
      <div className="work-container">
        <header className="work-header text-center">
          <span className="eyebrow-text"></span>
          <h1 className="work-title">Our Work</h1>
        </header>

        <div className="portfolio-grid">
          {workItems.map((item) => (
            <div key={item.id} className="portfolio-card">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-overlay"></div>
              <h3 className="card-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;