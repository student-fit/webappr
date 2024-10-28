import React from 'react';
import './ToursHeader.css';
import src from '../../Pictures/Tours.jpg'

const ToursHeader = ({headertext}) => {
  return (
    <div className="header-container">
      <img
        className="header-image"
        src={src}
        alt="Header"
      />
      <div className="header-text">
        <h1>{headertext}</h1>
      </div>
    </div>
  );
};

export default ToursHeader;
