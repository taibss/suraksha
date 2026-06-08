import React from 'react';

interface DoorwaysProps {
  onNavigate: (page: string) => void;
}

export const Doorways: React.FC<DoorwaysProps> = ({ onNavigate }) => {
  const doorways = [
    {
      id: 'door1',
      icon: (
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="#fff3d6"/>
          <circle cx="54" cy="54" r="22" fill="none" stroke="#f7b32b" strokeWidth="6"/>
          <path d="M70 70l20 20" stroke="#f7b32b" strokeWidth="7" strokeLinecap="round"/>
          <circle cx="54" cy="54" r="9" fill="#ff6b6b"/>
          <path d="M54 50v5m0 4h.01" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Know the scams',
      description: 'Spot the patterns and red flags — in friendly, plain language.',
      cta: 'Browse the library →',
      action: () => onNavigate('scams')
    },
    {
      id: 'door2',
      icon: (
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="#e3f7f1"/>
          <path d="M60 26 92 38v22c0 22-14 30-32 38C42 90 28 82 28 60V38z" fill="#2cc4a6"/>
          <path d="M46 60l10 10 20-22" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "I've been scammed",
      description: 'Take a breath. We\'ll walk you through every step, calmly.',
      cta: 'See what to do →',
      action: () => onNavigate('redressal')
    },
    {
      id: 'door3',
      icon: (
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="#efeaff"/>
          <circle cx="60" cy="48" r="18" fill="#7b6bd6"/>
          <path d="M30 96a30 30 0 0 1 60 0z" fill="#7b6bd6"/>
          <path d="M40 44a20 20 0 0 1 40 0" fill="none" stroke="#4a3f88" strokeWidth="4"/>
          <rect x="36" y="44" width="7" height="13" rx="3" fill="#4a3f88"/>
          <rect x="77" y="44" width="7" height="13" rx="3" fill="#4a3f88"/>
          <circle cx="53" cy="48" r="2.4" fill="#fff"/>
          <circle cx="67" cy="48" r="2.4" fill="#fff"/>
          <path d="M54 55q6 4 12 0" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Find verified help',
      description: 'Friendly, identity-verified advocates. We list — we never push.',
      cta: 'Open the directory →',
      action: () => onNavigate('directory')
    }
  ];

  return (
    <section style={{paddingTop: "20px"}}>
      <div className="wrap">
        <div className="doorways">
          {doorways.map((doorway, index) => (
            <div 
              key={doorway.id} 
              className="door" 
              onClick={doorway.action}
            >
              <div className="art">{doorway.icon}</div>
              <h3>{doorway.title}</h3>
              <p>{doorway.description}</p>
              <span className="go">{doorway.cta}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};