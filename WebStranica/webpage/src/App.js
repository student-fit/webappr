import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from './locales/en.json';
import hrTranslation from './locales/hr.json';
import esTranslation from './locales/es.json';
import frTranslation from './locales/fr.json';
//import itTranslation from './locales/it.json';

import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Navigation from './components/Navigation';
import Home from './Home';
import Taxi from './Pages/TaxiPage/Taxi';
import Transfer from './Pages/TransferPage/Transfer';
import Tours from './Pages/ToursPage/ToursPage';
import ContactPage from './Pages/ContactPage/ContactPage';






// Inicijalizacija i18n objekta
i18n.init({
  interpolation: { escapeValue: false }, // React vodi brigu o interpolaciji
  lng: 'en', // Početni jezik
  resources: {
    en: { translation: enTranslation },
    hr: { translation: hrTranslation },
    es: {translation: esTranslation},
    fr: {translation: frTranslation},
    //it: {translation: itTranslation},
    
  } // Učitavanje prevoda
});

function App() {
  const handleJoinChat = () => {
    // Replace this with the actual WhatsApp number
    const phoneNumber = '+38763878491'; // Replace with the desired WhatsApp number
  
    // You can format the URL based on WhatsApp's documentation for sending messages to a specific number
    //const url = `https://wa.me/${phoneNumber}`;

    const url2=`https://wa.me/${phoneNumber}?text=Hi%20*Medjugorje%20Transfer*!%20I%20need%20more%20info%20about%20your%2Ftransfers`;
  
    // Open the WhatsApp chat in a new tab
    window.open(url2, '_blank');
  
    // If you want to navigate the user to a different route within your app after clicking the button
    // navigate('/your-route');
  };
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
      <Navigation i18n={i18n} />

        <Routes>
 
          <Route path="/" element={<Home />} />
          <Route path="/taxi" element={<Taxi />} />
          <Route path="/transfers" element={<Transfer />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact-us" element={<ContactPage />} />

        </Routes>
        <Fab
            style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#25D366' }}
            color="green"
            aria-label="add"
            onClick={handleJoinChat}
          >
            <WhatsAppIcon />
          </Fab>
      </Router>
      
    </I18nextProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
