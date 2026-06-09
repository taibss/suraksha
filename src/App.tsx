import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Alert } from './components/Alert';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Doorways } from './components/Doorways';
import { Protection } from './components/Protection';
import { ScamOfTheWeek } from './components/ScamOfTheWeek';
import { HallOfShame } from './components/HallOfShame';
import { Reassurance } from './components/Reassurance';
import { Band247 } from './components/Band247';
import { Testimonials } from './components/Testimonials';
import { SpreadWord } from './components/SpreadWord';
import { Footer } from './components/Footer';
import ScamLibrary from './components/ScamLibrary';
import ScamDetail from './components/ScamDetail';
import Redressal from './components/Redressal';
import LawyerDirectory from './components/LawyerDirectory';
import IntakeForm from './components/IntakeForm';
import CityWatch from './components/CityWatch';
import ResourcesPage from './components/ResourcesPage';
import AboutPage from './components/AboutPage';
import Chatbot from './components/Chatbot';
import FloatingChatbot from './components/FloatingChatbot';
import { CROOKS, TESTIMONIALS, TICKER_ITEMS } from './data/data';
import DecisionTreePage from './components/DecisionTreePage';
import './App.css';
import './components/Chatbot.css';
import './components/FloatingChatbot.css';


const App: React.FC = () => {
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState('en');
  const [showAlert, setShowAlert] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  useEffect(() => {
  document.body.className = darkMode ? 'dark' : 'light';
}, [darkMode]);

  // Handle navigation
  const handleNavigate = (page: string) => {
  navigate('/' + page);
  window.scrollTo({ top: 0, behavior: 'instant' });
};

  // Handle language change
  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    // In a real app, this would update translations
  };

  // Hide alert
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  // Render ticker content
  useEffect(() => {
    const ticker = document.getElementById('ticker');
    if (ticker) {
      ticker.innerHTML = [...TICKER_ITEMS, ...TICKER_ITEMS].map(item => 
        `<span class="item"><span class="dot"></span>${item}</span>`
      ).join('');
    }
  }, []);

  // Hide logo after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
  <div className="App" style={{
    position: 'relative',
    minHeight: '100vh',
  }}>
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '700px',
      height: '700px',
      backgroundImage: darkMode ? 'url(/darkmode-suraksha-logo-2.0.jpg)' : 'url(/suraksha_logo.jpeg)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      opacity: darkMode ? '0.04' : '0.06',
      zIndex: 1,
      pointerEvents: 'none',
    }} />
      {!showLogo && (
        <>
          <div className="app-chrome">
            {showAlert && <Alert onClose={handleCloseAlert} />}
            <Header
              currentLang={currentLang}
              onLanguageChange={handleLanguageChange}
              onNavigate={handleNavigate}
              currentPage=""
              darkMode={darkMode}
              onToggleDark={() => setDarkMode(!darkMode)}
            />
          </div>
        <main>
  <Routes>
    <Route path="/" element={<><Hero onNavigate={handleNavigate}/><Stats /><Doorways onNavigate={handleNavigate} /><Protection /><ScamOfTheWeek onNavigate={handleNavigate} /><HallOfShame crooks={CROOKS} /><Reassurance /><Band247 /><Testimonials testimonials={TESTIMONIALS} /><SpreadWord onNavigate={handleNavigate} /></>} />
    <Route path="/scams" element={<ScamLibrary onNavigate={handleNavigate} />} />
    <Route path="/redressal" element={<Redressal onNavigate={handleNavigate} />} />
    <Route path="/directory" element={<LawyerDirectory onNavigate={handleNavigate} />} />
    <Route path="/intake" element={<IntakeForm onNavigate={handleNavigate} />} />
    <Route path="/city" element={<CityWatch onNavigate={handleNavigate} />} />
    <Route path="/resources" element={<ResourcesPage onNavigate={handleNavigate} />} />
    <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
    <Route path="/decision-tree" element={<DecisionTreePage />} />
  </Routes>
</main>
<Footer onNavigate={handleNavigate} />
<FloatingChatbot />
        </>
      )}
    </div>
  );
};

export default App;
