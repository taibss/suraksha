import React from 'react';
import { PROMISES } from '../data/data';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      title: 'Sense',
      description: 'AI spots rising scam patterns across the city, early.',
      icon: (
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="#fff3d6"/>
          <circle cx="54" cy="54" r="22" fill="none" stroke="#f7b32b" strokeWidth="6"/>
          <path d="M70 70l20 20" stroke="#f7b32b" strokeWidth="7" strokeLinecap="round"/>
          <circle cx="54" cy="54" r="9" fill="#ff6b6b"/>
          <path d="M54 50v5m0 4h.01" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Explain',
      description: 'Each becomes warm, vernacular, plain-language content.',
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
      )
    },
    {
      title: 'Resolve',
      description: 'A step-by-step path, and a verified advocate when needed.',
      icon: (
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="#e3f7f1"/>
          <path d="M60 26 92 38v22c0 22-14 30-32 38C42 90 28 82 28 60V38z" fill="#2cc4a6"/>
          <path d="M46 60l10 10 20-22" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">The Movement</div>
          <h2>No one should face a crime alone — or uninformed</h2>
          <p>
            Suraksha turns the city's everyday crimes into prevention people can use and a clear path to help. We don't replace the police, the courts or a lawyer — we help you reach them faster, and better prepared.
          </p>
        </div>

        <div className="how">
          {steps.map((step, index) => (
            <div key={index} className="h">
              <div className="art">{step.icon}</div>
              <h3 style={{margin: '.3em 0'}}>{step.title}</h3>
              <p style={{color: 'var(--ink-soft)'}}>{step.description}</p>
            </div>
          ))}
        </div>

        <h3 style={{marginTop: '16px'}}>The people behind it</h3>
        
        <div className="two-corps">
          <div className="corp">
            <div className="eyebrow">Tier 1</div>
            <h4>Suraksha Fellows</h4>
            <p style={{color: 'var(--ink-soft)'}}>
              Law students and young graduates working as para-legals — awareness, intake and navigation help. They guide on process, not legal advice, and escalate to advocates when needed.
            </p>
          </div>
          
          <div className="corp">
            <div className="eyebrow teal">Tier 2</div>
            <h4>The Advocate Panel</h4>
            <p style={{color: 'var(--ink-soft)'}}>
              Enrolled, identity-verified advocates who give the actual legal guidance — listed neutrally in the directory.
            </p>
          </div>
        </div>

        <h3 style={{marginTop: '38px'}}>Our promises</h3>
        
        <div className="promises">
          {PROMISES.map((promise, index) => (
            <div key={index} className="promise">
              <span className="art">
                {promise.icon === 'iHelp' && (
                  <svg width="38" height="38" viewBox="0 0 120 120">
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
                )}
                {promise.icon === 'iMoney' && (
                  <svg width="38" height="38" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="#e3f7f1"/>
                    <circle cx="60" cy="60" r="25" fill="#2cc4a6"/>
                    <text x="60" y="68" fontSize="28" textAnchor="middle" fill="#fff" fontFamily="Baloo 2,sans-serif" fontWeight="800">₹</text>
                  </svg>
                )}
                {promise.icon === 'iCitizen' && (
                  <svg width="38" height="38" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="#fff3d6"/>
                    <circle cx="60" cy="45" r="20" fill="#f7b32b"/>
                    <path d="M35 70a25 25 0 0 1 50 0z" fill="#f7b32b"/>
                  </svg>
                )}
              </span>
              <b>{promise.text}</b>
            </div>
          ))}
        </div>

        <div className="disclaim" style={{marginTop: '30px'}}>
          <span>🇮🇳</span>
          <span>
            Built in India · Hosted in India · Powered by Xarka, LawgicHub's Indian legal AI.
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;