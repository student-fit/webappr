import React from 'react';
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container" >
        <div className="row" style={{display:'flex'}}>
          <div className="desno" style={{display:'flex'}}>
            <h5>Get connected with us on social networks:</h5>
            {/* Add your social media icons here */}
            {/* Example: */}
            <div className='ikone'>
            <a href="https://www.facebook.com/profile.php?id=61558553913612&mibextid=LQQJ4d">
              <FacebookIcon style={{ fontSize: 30, marginLeft: 10, color: 'white' }} />
            </a>
            <a href="https://instagram.com/travelmedjugorje">
              <InstagramIcon style={{ fontSize: 30, marginLeft: 10, color: 'white'  }} />
            </a>
            </div>
            {/* Repeat for other social media platforms */}
          </div>
          <div className="levo">
            <h5>CONTACT</h5>
            <p>Medjugorje, BiH</p>
            <p>Email:</p>
            <p> medjugorjetransport@gmail.com</p>
            <p>Phone: +387 63 878 491</p>

          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        © {new Date().getFullYear()} Copyright: Medjugorje Trasport
       
      </div>
 
    </footer>
   
  );
};

export default Footer;
