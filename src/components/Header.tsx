import React, { useState } from 'react';
import surakshaLogo from '../../suraksha_logo.jpeg';

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
  onNavigate: (page: string) => void;
  currentPage: string;
  darkMode: boolean;
  onToggleDark: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange, onNavigate, currentPage, darkMode, onToggleDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'hi', name: 'हि' },
    { code: 'mr', name: 'मरा' }
  ];

  return (
    <>
      <header className="nav">
        <div className="wrap">
          <div className="brand" onClick={() => onNavigate('home')}>
            <span id="navshield">
              <img src={surakshaLogo} alt="Suraksha Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
            </span>
            <div>
              <span className="name">Suraksha</span>
              <span className="by">by LawgicHub</span>
            </div>
          </div>
          <button className="burger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`links ${menuOpen ? 'open' : ''}`} id="menu">
            <a onClick={() => { onNavigate('home'); setMenuOpen(false); }}>Home</a>
            <a onClick={() => { onNavigate('scams'); setMenuOpen(false); }}>Know the Scams</a>
            <a onClick={() => { onNavigate('redressal'); setMenuOpen(false); }}>If You've Been Scammed</a>
            <a onClick={() => { onNavigate('directory'); setMenuOpen(false); }}>Find Verified Help</a>
            <a onClick={() => { onNavigate('intake'); setMenuOpen(false); }}>Suraksha Help</a>
            <a onClick={() => { onNavigate('city'); setMenuOpen(false); }}>City Watch</a>
            <a onClick={() => { onNavigate('about'); setMenuOpen(false); }}>About</a>
            <a onClick={() => { onNavigate('decision-tree'); setMenuOpen(false); }} style={{ color: '#f7b32b', fontWeight: 'bold' }}>🆘 Get Help</a>
          </nav>
          <div className={`lang ${menuOpen ? 'open' : ''}`} id="lang">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => onLanguageChange(lang.code)}
                className={currentLang === lang.code ? 'on' : ''}
                style={{ color: '#000' }}
              >
                {lang.name}
              </button>
            ))}
          </div>
          <button className="btn btn-gold nav-cta" onClick={() => onNavigate('decision-tree')} style={{ padding: '10px 20px', fontSize: '16px', fontWeight: 'bold' }}>
            Get Help
          </button>
        </div>
      </header>
      <div className="ticker">
        <span className="lbl">City Watch</span>
        <div className="track" id="ticker">
        </div>
      </div>
      <button onClick={onToggleDark} style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: darkMode ? '#fff' : '#111',
        color: darkMode ? '#111' : '#fff',
        border: 'none',
        fontSize: '22px',
        cursor: 'pointer',
        zIndex: 9999,
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </>
  );
};
