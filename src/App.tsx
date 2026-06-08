
import React, { useState, useEffect } from 'react';
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
import surakshaLogo from '../suraksha_logo.jpeg';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLang, setCurrentLang] = useState('en');
  const [showAlert, setShowAlert] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  useEffect(() => {
  document.body.className = darkMode ? 'dark' : 'light';
}, [darkMode]);

  // Handle navigation
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
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

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Stats />
            <Doorways onNavigate={handleNavigate} />
            <Protection />
            <ScamOfTheWeek onNavigate={handleNavigate} />
            <HallOfShame crooks={CROOKS} />
            <Reassurance />
            <Band247 />
            <Testimonials testimonials={TESTIMONIALS} />
            <SpreadWord onNavigate={handleNavigate} />
          </>
        );
      
      case 'scams':
        return <ScamLibrary onNavigate={handleNavigate} />;
      
      case 'detail':
        // For demo, using the first scam
        return <ScamDetail scamId="digital-arrest" onNavigate={handleNavigate} />;
      
      case 'redressal':
        return <Redressal onNavigate={handleNavigate} />;
      
      case 'directory':
        return <LawyerDirectory onNavigate={handleNavigate} />;
      
      case 'intake':
        return <IntakeForm onNavigate={handleNavigate} />;
      
      case 'city':
        return <CityWatch onNavigate={handleNavigate} />;
      
      case 'resources':
        return <ResourcesPage onNavigate={handleNavigate} />;
      
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;

      case 'decision-tree':
        return <DecisionTreePage />;

      case 'chatbot':
        return (
          <section className="wrap" style={{ padding: '48px 24px' }}>
            <Chatbot />
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="App">
      {showLogo && (
        <div className="logo-loading-screen">
          <img src={surakshaLogo} alt="Suraksha Logo" className="logo-giant" />
        </div>
      )}
      {!showLogo && (
        <>
          {showAlert && <Alert onClose={handleCloseAlert} />}
        <Header
  currentLang={currentLang}
  onLanguageChange={handleLanguageChange}
  onNavigate={handleNavigate}
  currentPage={currentPage}
  darkMode={darkMode}
  onToggleDark={() => setDarkMode(!darkMode)}
/>
          <main>
            {renderPage()}
          </main>
          <Footer onNavigate={handleNavigate} />
          <FloatingChatbot />
        </>
      )}
    </div>
  );
};

export default App;
