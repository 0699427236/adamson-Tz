import React, { useState } from 'react';
import InterestForm from './InterestForm';
import f4 from './asset/f4.jpg';
import f2 from './asset/f2.jpg';
import f6 from './asset/f6.png';
import f5 from './asset/f5.jpg';
import './ProductDetails.css';

function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Wooden cooking cabinet",
      description: "Wooden cooking cabinet with stove space, durable, stylish, and functional.",
      location: "Iyunga, Tanzania",
      image: f4,
      label: "wooden design"
    },
    {
      id: 2,
      name: "Modern cooking Table",
      description: "Upgrade your kitchen with this stylish and durable wooden cooking cabinet.",
      location: "Iyunga, Mbeya",
      image: f2,
      label: "Wood Design"
    },
    {
      id: 3,
      name: "Classic Wooden Cooking cabinet",
      description: "Soft, elegant wooden frame to bring beauty and comfort to your kichen.",
      location: "Iyunga, Mbeya",
      image: f6,
      label: "wooden design"
    },

    // More products...
  ];

  const extendedProducts = [
    ...products,
    {
      id: 4,
      name: "Elegant Wooden Shelf",
      description: "Elegant wooden shelf with modern design, perfect for your living room.",
      location: "Mbeya, Tanzania",
      image: f5,
      label: "wooden design"
    }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '28px', fontWeight: 'bold' }}>Our Products</h2>
      <div className="grid-container">
        {extendedProducts.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', maxHeight: '150px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '10px 15px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '5px' }}>{product.name}</h4>
              <p style={{ fontSize: '0.85rem', color: '#555' }}>{product.description}</p>
              <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '5px' }}>{product.location}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <span style={{ backgroundColor: '#0d6efd', color: '#fff', padding: '4px 12px', borderRadius: '5px', fontSize: '0.85rem' }}>{product.label}</span>
              </div>
              <button
                style={{ backgroundColor: '#0d6efd', color: '#fff', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 'bold', marginTop: '15px' }}
                onClick={() => setSelectedProduct(product)}
              >
                Order now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <InterestForm product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}

export default ProductDetails;
