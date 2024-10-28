import React from 'react';
import './TaxiContent.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ToursContent = ({ slides, t1, t2 }) => {
 

  return (
    <section style={{ backgroundColor: '#F5F5F5', padding: '50px 0', marginTop: '2%' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>{t1}</h2>
        <p style={{ textAlign: 'center', marginBottom: '40px' }}>{t2}</p>
        <div className="slider" style={{ position: 'relative', width: '100%', height: '100%' }}>
          {slides.map((slide, index) => (
            <Card className='karticaAuto' sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={slide.imageUrl}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {slide.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {slide.caption}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursContent;
