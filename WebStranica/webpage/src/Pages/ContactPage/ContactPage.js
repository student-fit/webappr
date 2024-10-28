import React from 'react';
import './ContactPage.css';
import src from '../../Pictures/firmbee-com-SpVHcbuKi6E-unsplash.jpg'
import BasicForm from '../../components/Contactform/Contact';
import Footer from '../../components/Footer/Footer';

const ContactPage = () => {
  return (
    <>
    <div className="header-container">
      <img
        className="header-image"
        src={src}
        alt="Header"
      />
      <div className="header-text">
        <h1>Contact us</h1>
      </div>
    </div>
<BasicForm></BasicForm>
<Footer></Footer>
    </>
  );
};

export default ContactPage;
