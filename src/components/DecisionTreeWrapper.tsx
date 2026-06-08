import React, { useState } from 'react';
import { Header } from './Header';
import DecisionTree from './DecisionTree';
import './DecisionTreeWrapper.css';

const DecisionTreeWrapper: React.FC = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'decision-tree':
        return <DecisionTree />;
      case 'home':
      default:
        return (
          <div className="main-content">
            <h1>Welcome to Suraksha</h1>
            <p>Your guide to staying safe from scams and getting help when you need it.</p>
            <button 
              className="btn btn-gold" 
              onClick={() => handleNavigate('decision-tree')}
            >
              Get Help Now
            </button>
          </div>
        );
    }
  };

  return (
    <div className="app">
      <Header 
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onNavigate={handleNavigate}
        currentPage={currentPage}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(!darkMode)}
      />
      {renderContent()}
    </div>
  );
};

export default DecisionTreeWrapper;
