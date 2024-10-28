import React from 'react';
import './Card.css';

const Card = ({ icon, title, content }) => {
  return (
    <div className="card">
      <div className="card-top">
        <img className="card-img" src={icon} alt={title}></img>
      </div>
      <div className="card-bottom">
        <h1 className="card-title">{title}</h1>
        <p className="card-content">{content}</p>
      </div>
    </div>
  );
}

export default Card;
