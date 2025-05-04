import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import ProductDetails from './ProductDetails';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import ProductGallery from './ProductGallery';
import InterestForm from './InterestForm';
import './styles.css';
import { Container } from 'react-bootstrap';

function App() {
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openInterestForm = (product) => {
    setSelectedProduct(product);
    setShowInterestForm(true);
  };

  const closeInterestForm = () => {
    setShowInterestForm(false);
    setSelectedProduct(null);
  };

  return (
    <Router>
      <div className="app-container">
        <Header openInterestForm={openInterestForm} />
        <Container className="main-content my-5">
          <Routes>
            <Route path="/" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product-gallery" element={<ProductGallery openInterestForm={openInterestForm} />} />
          </Routes>
        </Container>
        <Footer />
        {showInterestForm && (
          <InterestForm product={selectedProduct} onClose={closeInterestForm} />
        )}
      </div>
    </Router>
  );
}

export default App;
