import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function InterestForm({ product, onClose }) {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_lddz4wj',
        'template_em3uj6b',
        formRef.current,
        'absw4-ccfwfw8Fhn_'
      )
    .then(
      (result) => {
        alert('Message sent successfully!');
        onClose(); // Close the form after sending
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.log(error.text);
      }
    );
  };

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
      padding: '20px'
    },
    formBox: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '12px',
      width: '100%',
      maxWidth: '500px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
      transition: 'max-width 0.3s ease'
    },
    title: {
      marginBottom: '20px',
      fontSize: '1.2rem',
      fontWeight: 'bold'
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '6px',
      border: '1px solid #ccc',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '6px',
      border: '1px solid #ccc',
      resize: 'vertical',
      boxSizing: 'border-box'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#0d6efd',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      marginRight: '10px',
      width: 'auto'
    },
    closeButton: {
      backgroundColor: '#dc3545'
    },
    // Media Queries for Responsiveness
    '@media (max-width: 768px)': {
      formBox: {
        maxWidth: '90%', // Ensure the form takes up most of the screen on smaller devices
        padding: '20px'
      },
      input: {
        padding: '8px'
      },
      textarea: {
        padding: '8px'
      },
      button: {
        width: '100%', // Full width for buttons on smaller screens
        padding: '12px 0',
        fontSize: '1rem'
      },
      closeButton: {
        width: '100%',
        padding: '12px 0',
        fontSize: '1rem',
      },
      title: {
        fontSize: '1rem',
        textAlign: 'center'
      }
    },
    '@media (max-width: 480px)': {
      formBox: {
        maxWidth: '100%', // Take full width on very small screens
        padding: '15px'
      },
      button: {
        width: '100%',
        fontSize: '1.2rem',
        padding: '14px 0'
      },
      closeButton: {
        width: '100%',
        fontSize: '1.2rem',
        padding: '14px 0'
      },
    }
  };

  return (
    <div style={styles.overlay}>
      <form ref={formRef} onSubmit={handleSubmit} style={styles.formBox}>
        <h3 style={styles.title}>Interested in: {product.name}</h3>
        <input type="text" name="customer_name" placeholder="Full Name" required style={styles.input} />
        <input type="email" name="customer_email" placeholder="Email" required style={styles.input} />
        <input type="text" name="customer_phone" placeholder="Phone Number" required style={styles.input} />
        <textarea name="message" rows="4" placeholder="Message (optional)" style={styles.textarea}></textarea>
        
        {/* Hidden input to send product info */}
        <input type="hidden" name="product_name" value={product.name} />
        
        <button type="submit" style={styles.button}>Send</button>
        <button type="button" onClick={onClose} style={{ ...styles.button, ...styles.closeButton }}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default InterestForm;
