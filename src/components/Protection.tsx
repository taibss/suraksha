import React from 'react';

export const Protection: React.FC = () => {
  const protectionSteps = [
    {
      id: 'prot1',
      icon: (
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="#fff3d6"/>
          <circle cx="54" cy="54" r="22" fill="none" stroke="#f7b32b" strokeWidth="6"/>
          <path d="M70 70l20 20" stroke="#f7b32b" strokeWidth="7" strokeLinecap="round"/>
          <circle cx="54" cy="54" r="9" fill="#ff6b6b"/>
          <path d="M54 50v5m0 4h.01" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Spot it',
      description: 'We turn the week\'s real scams into easy warnings you actually understand.'
    },
    {
      id: 'prot2',
      icon: (
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="#e3f7f1"/>
          <path d="M60 26 92 38v22c0 22-14 30-32 38C42 90 28 82 28 60V38z" fill="#2cc4a6"/>
          <path d="M46 60l10 10 20-22" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Beat it',
      description: 'Know the red flags, and the crook walks away empty-handed.'
    },
    {
      id: 'prot3',
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
      title: 'Get help',
      description: 'If it happened, a friendly Fellow and a verified advocate are a tap away.'
    }
  ];

  return (
    <section style={{background: "var(--sky)"}}>
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow teal">How Suraksha protects you</div>
          <h2>Three simple steps. One safe city.</h2>
        </div>
        <div className="protect">
          {protectionSteps.map((step, index) => (
            <div key={step.id} className="pcard">
              <div className="art">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};