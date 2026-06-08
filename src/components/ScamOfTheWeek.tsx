import React from 'react';

interface ScamOfTheWeekProps {
  onNavigate: (page: string) => void;
}

export const ScamOfTheWeek: React.FC<ScamOfTheWeekProps> = ({ onNavigate }) => {
  const scam = {
    week: 'Week 14 · Mumbai',
    name: 'The "Digital Arrest" call',
    description: 'A fake "officer" video-calls, says you\'re in trouble, and won\'t let you hang up until you pay. Here\'s the secret: no real police ever does this. Ever.',
    flags: [
      'A "police/CBI officer" video-calls and forbids you from hanging up or telling family.',
      'You\'re told a parcel, SIM or account in your name is linked to a crime.',
      'You\'re asked to move money to a "safe account" to "verify" it.',
      'Constant urgency, secrecy and threat of immediate arrest.'
    ]
  };

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Scam of the Week</div>
          <h2>This week\'s trick, decoded</h2>
        </div>
        <div className="sow">
          <div className="left">
            <div className="week">{scam.week}</div>
            <h3>{scam.name}</h3>
            <p>{scam.description}</p>
            <div style={{marginTop: "16px"}}>
              <span 
                className="wa" 
                onClick={() => alert('Demo: this card would forward to WhatsApp.')}
              >
                ↗ Forward to family
              </span>
            </div>
            <span className="crook">
              <svg viewBox="0 0 96 96">
                <rect x="6" y="6" width="84" height="84" rx="14" fill="#10142f"/>
                <g opacity="0.25" stroke="#fff" strokeWidth="1">
                  <path d="M6 30h84M6 54h84M6 78h84"/>
                </g>
                <rect x="28" y="46" width="40" height="44" rx="16" fill="#4a4668"/>
                <circle cx="48" cy="40" r="22" fill="#cdbfae"/>
                <rect x="26" y="34" width="44" height="12" rx="6" fill="#1a1626"/>
                <circle cx="40" cy="40" r="3" fill="#fff"/>
                <circle cx="56" cy="40" r="3" fill="#fff"/>
                <circle cx="40" cy="40.5" r="1.4" fill="#111"/>
                <circle cx="56" cy="40.5" r="1.4" fill="#111"/>
                <path d="M30 30a22 22 0 0 1 36 0z" fill="#4a4668"/>
                <path d="M40 52q8 5 16 0" stroke="#7a5a4a" strokeWidth="2.4" fill="none" strokeLinecap="round"/>
                <ellipse cx="34" cy="50" rx="3" ry="4" fill="#9fd5ff" opacity="0.7"/>
              </svg>
            </span>
          </div>
          <div className="right">
            <div className="eyebrow coral" style={{marginBottom: "14px"}}>Red flags</div>
            <ul className="flags">
              {scam.flags.map((flag, index) => (
                <li key={index}>
                  <svg className="fx" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2.4">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v5m0 3h.01"/>
                  </svg>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
            <button 
              className="btn btn-out" 
              style={{marginTop: "6px"}}
              onClick={() => onNavigate('detail')}
            >
              Read the full guide →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};