import React from 'react';
import './TransfersHeader.css';
import src from '../../Pictures/transfer.jpg'

const TransfersHeader = ({headertext}) => {
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

export default TransfersHeader;
