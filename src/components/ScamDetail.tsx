import React from 'react';
import { SCAMS } from '../data/scams';

interface ScamDetailProps {
  scamId: string;
  onNavigate: (page: string) => void;
}

const ScamDetail: React.FC<ScamDetailProps> = ({ scamId, onNavigate }) => {
  const scam = SCAMS.find(s => s.id === scamId);
  
  if (!scam) {
    return (
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Scam not found</h2>
            <p>The requested scam guide could not be found.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="wrap">
        <a 
          className="go" 
          style={{color: '#c8860f', cursor: 'pointer', fontFamily: 'Baloo 2,sans-serif', fontWeight: '700'}}
          onClick={() => onNavigate('scams')}
        >
          ← Back to all scams
        </a>
        
        <div style={{marginTop: '18px'}}>
          <div className="detail-head">
            <div>
              <span className="tag a">{scam.category}</span>
              <h2>{scam.title}</h2>
              <p>{scam.howItWorks}</p>
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
          
          <div className="blocks">
            <div className="block">
              <h4>
                <span style={{color: 'var(--coral)'}}>⚑</span> Red flags
              </h4>
              <ul className="flags">
                {scam.redFlags.map((flag, index) => (
                  <li key={index}>
                    <svg className="fx" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2.4">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 8v5m0 3h.01"/>
                    </svg>
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="block safe">
              <h4>
                <span style={{color: 'var(--teal-deep)'}}>✓</span> How to stay safe
              </h4>
              <ul>
                {scam.safetyTips.map((tip, index) => (
                  <li key={index}>
                    <svg className="fx" viewBox="0 0 24 24" fill="none" stroke="#2cc4a6" strokeWidth="2.6">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12l3 3 5-6"/>
                    </svg>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="block" style={{marginTop: '22px'}}>
            <h4>
              <span style={{color: 'var(--gold)'}}>→</span> If it's already happened now breathe, then:
            </h4>
            <ol className="steps">
              <li>
                <b>Step 1</b> Call 1930 and report the fraud right away
              </li>
              <li>
                <b>Step 2</b> File a complaint on cybercrime.gov.in with evidence
              </li>
              <li>
                <b>Step 3</b> Call your bank to freeze the account & block transfers
              </li>
              <li>
                <b>Step 4</b> Note down all numbers, screenshots & transaction IDs
              </li>
              <li>
                <b>Step 5</b> Lodge an FIR at the local / cyber police station
              </li>
              <li>
                <b>Step 6</b> Tell your family and warn your community group
              </li>
            </ol>
            <div style={{display: 'flex', gap: '12px', marginTop: '18px', flexWrap: 'wrap'}}>
              <button className="btn btn-gold">
                Download first-response template
              </button>
              <button className="btn btn-out" onClick={() => onNavigate('intake')}>
                Get a Fellow to help
              </button>
            </div>
          </div>
        </div>
        
        <div className="disclaim">
          <span>ℹ️</span>
          <span>
            Friendly general info for awareness and not legal advice. For your specific situation, a verified advocate can help.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ScamDetail;