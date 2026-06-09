import React from 'react';

interface Crook {
  name: string;
  bubble: string;
  description: string;
  variant: number;
}

interface HallOfShameProps {
  crooks: Crook[];
}

const CrookCard: React.FC<{ crook: Crook }> = ({ crook }) => {
  return (
    <div className="crook-card">
      <span className="stamp">CASE: CLOSED</span>
      <div className="bubble">{crook.bubble}</div>
      <div className="mug">
        <svg viewBox="0 0 96 96">
          <rect x="6" y="6" width="84" height="84" rx="14" fill="#10142f"/>
          <g opacity="0.25" stroke="#fff" strokeWidth="1">
            <path d="M6 30h84M6 54h84M6 78h84"/>
          </g>
          <rect x="28" y="46" width="40" height="44" rx="16" fill={['#4a4668','#6b5a8a','#5a4a4a','#3a4a5a'][crook.variant % 4]}/>
          <circle cx="48" cy="40" r="22" fill={['#cdbfae','#e0b48a','#d4a878','#c9b59c'][crook.variant % 4]}/>
          <rect x="26" y="34" width="44" height="12" rx="6" fill="#1a1626"/>
          <circle cx="40" cy="40" r="3" fill="#fff"/>
          <circle cx="56" cy="40" r="3" fill="#fff"/>
          <circle cx="40" cy="40.5" r="1.4" fill="#111"/>
          <circle cx="56" cy="40.5" r="1.4" fill="#111"/>
          <path d="M30 30a22 22 0 0 1 36 0z" fill={['#4a4668','#6b5a8a','#5a4a4a','#3a4a5a'][crook.variant % 4]}/>
          <path d="M40 52q8 5 16 0" stroke="#7a5a4a" strokeWidth="2.4" fill="none" strokeLinecap="round"/>
          <ellipse cx="34" cy="50" rx="3" ry="4" fill="#9fd5ff" opacity="0.7"/>
        </svg>
      </div>
      <h4>{crook.name}</h4>
      <div className="desc">{crook.description}</div>
    </div>
  );
};

export const HallOfShame: React.FC<HallOfShameProps> = ({ crooks }) => {
  return (
    <section className="shame">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">Scammers' Hall of Shame</div>
          <h2>Crime doesn't pay. It gets caught. 😎</h2>
          <p>Every scam ends the same way: with a very nervous crook and a very closed case.</p>
        </div>
        <div className="crooks">
          {crooks.map((crook, index) => (
            <CrookCard key={index} crook={crook} />
          ))}
        </div>
        <p style={{textAlign: "center", color: "#8b90c4", fontSize: "0.8rem", marginTop: "20px"}}>
          Playful, illustrative cases but real scammers really do get caught when you report fast.
        </p>
      </div>
    </section>
  );
};