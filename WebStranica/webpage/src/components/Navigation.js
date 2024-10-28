import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navigation.css';
import Logoo from '../logo.png';

const Navigation = ({ i18n }) => {
  const { t } = useTranslation();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav>
      {/* Logo */}
      <div className="logo">
        <a href="/">
          <img src={Logoo} alt="Logo" />
        </a>
      </div>

      {/* Desktop navigacija */}
      <ul className="desktop-nav">
        <li><a className="linkic" href="/">{t('home')}</a></li>
        <li><a className="linkic" href="/taxi">{t('taxi')}</a></li>
        <li><a className="linkic" href="/transfers">{t('transfers')}</a></li>
        <li><a className="linkic" href="/tours">{t('tours')}</a></li>
        <li><a className="linkic" href="/contact-us">{t('contact_us')}</a></li>
        <li className="language-menu">
          <button onClick={toggleLanguageMenu}>{t('language')}</button>
          {languageMenuOpen && (
            <ul className="language-dropdown">
              <li><button onClick={() => changeLanguage('en')}>EN</button></li>
              <li><button onClick={() => changeLanguage('hr')}>HR</button></li>
              <li><button onClick={() => changeLanguage('es')}>ES</button></li>
              <li><button onClick={() => changeLanguage('fr')}>FR</button></li>
              <li><button onClick={() => changeLanguage('it')}>IT</button></li>
            </ul>
          )}
        </li>
      </ul>

      {/* Mobilna navigacija (hamburger meni) */}
      <div className="mobile-nav">
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {mobileMenuOpen && (
          <ul className="menu">
            <li><a className="linkic" href="/">{t('home')}</a></li>
            <li><a className="linkic" href="/taxi">{t('taxi')}</a></li>
            <li><a className="linkic" href="/transfers">{t('transfers')}</a></li>
            <li><a className="linkic" href="/tours">{t('tours')}</a></li>
            <li><a className="linkic" href="/contact-us">{t('contact_us')}</a></li>
            <li>
              <button onClick={toggleLanguageMenu}>{t('language')}</button>
              {languageMenuOpen && (
                <ul className="language-dropdown">
                  <li><button onClick={() => changeLanguage('en')}>EN</button></li>
                  <li><button onClick={() => changeLanguage('hr')}>HR</button></li>
                  <li><button onClick={() => changeLanguage('es')}>ES</button></li>
                  <li><button onClick={() => changeLanguage('fr')}>FR</button></li>
                  <li><button onClick={() => changeLanguage('it')}>IT</button></li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
