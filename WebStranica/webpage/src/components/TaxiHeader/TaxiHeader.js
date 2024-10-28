import React from 'react';
import './TaxiHeader.css';
import src from '../../Pictures/taxi.jpg'

const TaxiHeader = ({headertext}) => {
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

export default TaxiHeader;
