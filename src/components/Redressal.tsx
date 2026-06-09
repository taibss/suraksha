import React, { useState } from 'react';

interface RedressalProps {
  onNavigate: (page: string) => void;
}

const Redressal: React.FC<RedressalProps> = ({ onNavigate }) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (stepIndex: number) => {
    if (completedSteps.includes(stepIndex)) {
      setCompletedSteps(completedSteps.filter(step => step !== stepIndex));
    } else {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  const steps = [
    'Call 1930 and report the fraud right away',
    'File a complaint on cybercrime.gov.in with evidence',
    'Call your bank to freeze the account & block transfers',
    'Note down all numbers, screenshots & transaction IDs',
    'Lodge an FIR at the local / cyber police station',
    'Tell your family and warn your community group'
  ];

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow coral">If You've Been Scammed</div>
          <h2>Deep breath. Let's fix this together.</h2>
        </div>
        
        <div className="urgent">
          <span className="art">
            <svg viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="#fff3d6"/>
              <circle cx="54" cy="54" r="22" fill="none" stroke="#f7b32b" strokeWidth="6"/>
              <path d="M70 70l20 20" stroke="#f7b32b" strokeWidth="7" strokeLinecap="round"/>
              <circle cx="54" cy="54" r="9" fill="#ff6b6b"/>
              <path d="M54 50v5m0 4h.01" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"/>
            </svg>
          </span>
          <div>
            <b style={{fontSize: '1.12rem', fontFamily: 'Baloo 2,sans-serif'}}>Speed is your superpower.</b>
            <div style={{color: 'var(--ink-soft)'}}>
              The sooner a transfer is reported, the better the chance of freezing the money. Report first  tidy up the details after.
            </div>
          </div>
        </div>

        <div className="channels">
          <div className="chan">
            <div className="num">1930</div>
            <h4>Cyber Helpline</h4>
            <p>Call right away to report fraud.</p>
          </div>
          <div className="chan">
            <div className="num" style={{fontSize: '1.05rem', padding: '8px 0'}}>cybercrime.gov.in</div>
            <h4>National Portal</h4>
            <p>File online with evidence.</p>
          </div>
          <div className="chan">
            <div className="num" style={{fontSize: '1.2rem', padding: '6px 0'}}>Your Bank</div>
            <h4>Fraud Desk</h4>
            <p>Freeze the account, block transfers.</p>
          </div>
          <div className="chan">
            <div className="num" style={{fontSize: '1.3rem', padding: '5px 0'}}>FIR</div>
            <h4>Cyber Police</h4>
            <p>Lodge a formal complaint.</p>
          </div>
        </div>

        <h3 style={{marginBottom: '10px'}}>Your step-by-step (tap each as you go)</h3>
        
        <div className="tracker">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`t-item ${completedSteps.includes(index) ? 'done' : ''}`}
              onClick={() => toggleStep(index)}
            >
              <div className="chk"></div>
              <div className="t-txt">
                <b>Step {index + 1}</b>
                {step}
              </div>
            </div>
          ))}
        </div>

        <div style={{display: 'flex', gap: '14px', marginTop: '24px', flexWrap: 'wrap'}}>
          <button className="btn btn-teal btn-lg" onClick={() => onNavigate('intake')}>
            Get a Fellow to help me
          </button>
          <button className="btn btn-out btn-lg" onClick={() => onNavigate('directory')}>
            Find a verified advocate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Redressal;