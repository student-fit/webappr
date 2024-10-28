import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navigation.css'; // Učitajte CSS fajl za stilizaciju navigacije
import Logoo from '../logo.png'; // Import your logo component or image


const Navigation = ({ i18n }) => {
  const { t } = useTranslation();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageMenuOpen(false); // Zatvara padajući meni nakon promene jezika
  };

  return (
    <nav>
      {/* Desktop navigacija */}
      <div className="logo">
      <a href="/">
        <img className="logo" src={Logoo} alt="Logo" />
        </a>
      </div>

      <ul className="desktop-nav">
        <li><a className="linkic" href="/">{t('home')}</a></li>
        <li><a className="linkic" href="/taxi">{t('taxi')}</a></li>
        <li><a className="linkic" href="/transfers">{t('transfers')}</a></li>
        <li><a className="linkic" href="/tours">{t('tours')}</a></li>
        <li><a className="linkic" href="/contact-us">{t('contact_us')}</a></li>

        {/* <li><a href="/accommodation">{t('accommodation')}</a></li> */}
        <li className="language-menu">
          <button onClick={toggleLanguageMenu}>{t('language')}</button>
          {languageMenuOpen && (
            <ul className="language-dropdown">
              <li><button onClick={() => changeLanguage('en')}>EN</button></li>
              <li><button onClick={() => changeLanguage('hr')}>HR</button></li>
              <li><button onClick={() => changeLanguage('es')}>ES</button></li>
              <li><button onClick={() => changeLanguage('fr')}>FR</button></li>
              <li><button onClick={() => changeLanguage('it')}>IT</button></li>



              {/* Dodajte ostale opcije za promenu jezika */}
            </ul>
          )}
        </li>
      </ul>

      {/* Mobilna navigacija (hamburger meni) */}
      <div className="mobile-nav">
        {/* Implementacija hamburger menija */}
      </div>
    </nav>
  );
};

export default Navigation;
