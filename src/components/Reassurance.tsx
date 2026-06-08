import React from 'react';

export const Reassurance: React.FC = () => {
  return (
    <section>
      <div className="wrap">
        <div className="calm">
          <div className="art">
            <svg width="240" height="280" viewBox="0 0 130 150">
              <ellipse cx="65" cy="142" rx="46" ry="8" fill="#000" opacity="0.12"/>
              <rect x="30" y="86" width="70" height="60" rx="26" fill="#2cc4a6"/>
              <path d="M48 86h34v18a17 17 0 0 1-34 0z" fill="#f0bf95"/>
              <circle cx="65" cy="58" r="34" fill="#f0bf95"/>
              <path d="M30 54a35 35 0 0 1 70 0v6c-6-2-10-10-18-10-6 6-22 6-28 0-8 0-12 8-18 10z" fill="#2a2438"/>
              <circle cx="53" cy="58" r="3.4" fill="#33324a"/>
              <circle cx="77" cy="58" r="3.4" fill="#33324a"/>
              <circle cx="48" cy="66" r="4" fill="#ff9d9d" opacity="0.6"/>
              <circle cx="82" cy="66" r="4" fill="#ff9d9d" opacity="0.6"/>
              <path d="M55 70q10 8 20 0" stroke="#b06a4a" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M30 60v-4a35 35 0 0 1 70 0v4" fill="none" stroke="#33324a" strokeWidth="5"/>
              <rect x="26" y="58" width="9" height="16" rx="4" fill="#33324a"/>
              <rect x="95" y="58" width="9" height="16" rx="4" fill="#33324a"/>
              <path d="M95 70c0 8-6 12-14 13" stroke="#33324a" strokeWidth="3" fill="none"/>
              <rect x="74" y="80" width="14" height="9" rx="4" fill="#33324a"/>
              <circle cx="65" cy="110" r="11" fill="#fff"/>
              <text x="65" y="114" fontSize="9" textAnchor="middle" fill="#159e83" fontFamily="Baloo 2,sans-serif" fontWeight="800">24/7</text>
            </svg>
          </div>
          <div>
            <div className="eyebrow coral">Already been scammed?</div>
            <h2>First — take a breath. You're not alone.</h2>
            <p>
              It is not your fault. These are professional criminals, and thousands of smart people fall for the same trick every week. What matters now is acting fast — and you don't have to do it by yourself. Suraksha walks beside you, calmly, the whole way.
            </p>
            <div className="reassure">
              <span>✓ No judgement</span>
              <span>✓ Step-by-step help</span>
              <span>✓ Real people, 24×7</span>
            </div>
            <button className="btn btn-gold btn-lg">
              Start here, calmly →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};