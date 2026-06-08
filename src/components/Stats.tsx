import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section style={{paddingTop: "0", paddingBottom: "30px"}}>
      <div className="wrap">
        <div className="stats">
          <div className="stat">
            <span className="ic">
              <svg viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="24" fill="#fff3d6"/>
                <circle cx="24" cy="19" r="8" fill="#f7b32b"/>
                <path d="M10 40a14 14 0 0 1 28 0z" fill="#f7b32b"/>
              </svg>
            </span>
            <div>
              <div className="n">12,400+</div>
              <div className="l">citizens warned this week</div>
            </div>
          </div>
          <div className="stat">
            <span className="ic">
              <svg viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="24" fill="#e3f7f1"/>
                <circle cx="24" cy="24" r="13" fill="#2cc4a6"/>
                <text x="24" y="30" fontSize="15" textAnchor="middle" fill="#fff" fontFamily="Baloo 2,sans-serif" fontWeight="800">₹</text>
              </svg>
            </span>
            <div>
              <div className="n">₹3.1 Cr</div>
              <div className="l">helped freeze in time</div>
            </div>
          </div>
          <div className="stat">
            <span className="ic">
              <svg viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="24" fill="#efeaff"/>
                <path d="M24 11 38 16v9c0 9-6 13-14 16-8-3-14-7-14-16v-9z" fill="#7b6bd6"/>
                <path d="M19 24l4 4 7-8" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div>
              <div className="n">100+</div>
              <div className="l">verified advocates, 24×7</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};