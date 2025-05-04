import React from 'react';
import './ProductGallery.css';

// Import all images from asset folder
import f1 from './asset/f1.jpg';
import f2 from './asset/f2.jpg';
import f3 from './asset/f3.jpg';
import f4 from './asset/f4.jpg';
import f5 from './asset/f5.jpg';
import f6 from './asset/f6.png';
import f7 from './asset/f7.png';
import f8 from './asset/f8.png';

const images = [
  { src: f1, alt: 'Elegant Wooden Cabinet' },
  { src: f2, alt: 'Modern Cooking Table' },
  { src: f3, alt: 'Classic Wooden Frame' },
  { src: f4, alt: 'Stylish Wooden Design' },
  { src: f5, alt: 'Durable Furniture Piece' },
  { src: f6, alt: 'Premium Quality Wood' },
  { src: f7, alt: 'Comfortable Seating' },
  { src: f8, alt: 'Beautiful Woodwork' },
];

function ProductGallery({ openInterestForm }) {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '28px', fontWeight: 'bold', color: '#0d6efd' }}>
        Discover Our Exclusive Furniture Collection
      </h2>
      <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#555', marginBottom: '40px' }}>
        Explore our wide range of beautifully crafted furniture pieces designed to bring elegance and comfort to your home. Order now and transform your living space!
      </p>
      <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {images.map((image, index) => (
          <div key={index} className="gallery-item" style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <img src={image.src} alt={image.alt} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '10px', backgroundColor: '#f8f9fa' }}>
              <p style={{ margin: 0, fontWeight: '600', color: '#333' }}>{image.alt}</p>
              <button
                onClick={() => openInterestForm({ name: image.alt })}
                style={{
                  marginTop: '10px',
                  padding: '8px 12px',
                  backgroundColor: '#0d6efd',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Request Info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
