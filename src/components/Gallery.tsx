import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image4 from './assets/4.jpg';
import image5 from './assets/5.jpg';
import image6 from './assets/6.jpg';
import image7 from './assets/7.jpg';
// Sample images (Replace these with actual image paths)
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
      {/* 🔹 Header Section */}
      <h1 className="text-center fw-bold text-primary" style={{ fontSize: "2.5rem" }}>Gallery</h1>
      <p className="text-center text-muted fs-5">A collection of my work and projects.</p>

      {/* 🔹 Image Grid */}
      <div className="row mt-4">
        {images.map((src, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="shadow-lg border-0 rounded overflow-hidden">
              <img 
                src={src} 
                className="img-fluid rounded" 
                alt={`Gallery item ${index + 1}`} 
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
