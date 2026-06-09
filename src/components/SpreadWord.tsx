import React from 'react';

interface SpreadWordProps {
  onNavigate: (page: string) => void;
}

export const SpreadWord: React.FC<SpreadWordProps> = ({ onNavigate }) => {
  return (
    <section style={{paddingTop: "10px"}}>
      <div className="wrap">
        <div className="spread">
          <h2>The best protection? A forwarded message.</h2>
          <p>
            Send one scam card to someone you love today. It takes 10 seconds and it might save them lakhs.
          </p>
          <button className="btn btn-gold btn-lg" onClick={() => onNavigate('resources')} style={{
            background: '#FFC107',
            color: '#ffffff',
            border: '1.5px solid #ffffff',
            boxShadow: '0 8px 18px -8px rgba(165, 7, 7, 0.7)'
          }}>
            ↗ Share a scam card
          </button>
        </div>
      </div>
    </section>
  );
};
