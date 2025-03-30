import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css"; // Add a custom CSS file for additional styling
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image4 from './assets/4.jpg';
import image5 from './assets/5.jpg';
import image6 from './assets/6.jpg';
import image7 from './assets/7.jpg';

const images = [
  image1,
  image2,
  image4,
  image5,
  image6,
  image7
];

const Gallery: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold text-primary mb-4">Gallery</h1>
      <p className="text-center text-muted fs-5">A collection of our group projects and moments.</p>
      <div className="row mt-4 gy-4">
        {images.map((src, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-card shadow-sm border-0 rounded overflow-hidden">
              <img 
                src={src} 
                className="img-fluid gallery-img" 
                alt={`Gallery item ${index + 1}`} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
