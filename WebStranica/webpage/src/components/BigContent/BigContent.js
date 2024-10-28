import React from 'react';
import './BigContent.css'
import Divider from '@mui/material/Divider';


const BigContent = ({title, description, picture, t1, title2, description2, picture2}) => {
  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>{t1}</h2>
      <Divider textAlign="left" className="trip-title"> {title}</Divider>
      <div className="trip-container">
     
      <div className="trip-details">
        <p className="trip-description">
         {description}
        </p>
      </div>
      <div className="trip-image">
        <img src={picture} alt="Trip" style={{maxWidth: '100%'}}/>
      </div>
    </div>
    <Divider textAlign="right" className="trip-title" style={{marginTop: '2%'}}> {title2}</Divider>
    <div className="trip-container">
       
    <div className="trip-image">
         <img src={picture2} alt="Trip" style={{maxWidth: '100%'}}/>
       </div>
       <div className="trip-details">
         <p className="trip-description" style={{paddingLeft: '2%'}}>
          {description2}
         </p>
       </div>
       
     </div>
    </>
    
  );
};

export default BigContent;
