import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navItems = [
    {
      title: "Learn",
      links: [
        { text: "Know the Scams", action: () => onNavigate('scams') },
        { text: "City Watch", action: () => onNavigate('city') },
        { text: "Resources", action: () => onNavigate('resources') }
      ]
    },
    {
      title: "Get Help",
      links: [
        { text: "If You've Been Scammed", action: () => onNavigate('redressal') },
        { text: "Find Verified Help", action: () => onNavigate('directory') },
        { text: "Suraksha Help", action: () => onNavigate('intake') }
      ]
    },
    {
      title: "Join",
      links: [
        { text: "Become a Fellow", action: () => onNavigate('about') },
        { text: "For Lawyers", action: () => onNavigate('about') },
        { text: "Privacy (DPDP)" }
      ]
    }
  ];

  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div>
            <div className="brand" onClick={() => onNavigate('home')} style={{marginBottom: "14px"}}>
              <span>
                <svg width="30" height="34" viewBox="0 0 30 34">
                  <path d="M15 1 28 6v11c0 9-6 13.5-13 16C8 30.5 2 26 2 17V6z" fill="#f7b32b"/>
                  <path d="M15 1v32c-7-2.5-13-7-13-16V6z" fill="#e09a14"/>
                  <circle cx="11.5" cy="14" r="1.4" fill="#fff"/>
                  <circle cx="18.5" cy="14" r="1.4" fill="#fff"/>
                  <path d="M11 19q4 3 8 0" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
              <div>
                <span className="name">Suraksha</span>
                <span className="by">by LawgicHub</span>
              </div>
            </div>
            <p style={{fontSize: "0.9rem", color: "#8a90b8", maxWidth: "34ch"}}>
              From the day's headlines to the citizen's hands.
            </p>
          </div>
          
          {navItems.map((section, index) => (
            <div key={index}>
              <h5>{section.title}</h5>
              {section.links.map((link, linkIndex) => (
                <a 
                  key={linkIndex} 
                  onClick={link.action}
                  style={{cursor: "pointer"}}
                >
                  {link.text}
                </a>
              ))}
            </div>
          ))}
        </div>
        
        <div className="sig">
          <span className="brandline">
            Suraksha · by LawgicHub · powered by Xarka
          </span>
          <span>
            Prototype with mock data — not a live service. © 2026
          </span>
        </div>
      </div>
    </footer>
  );
};