import React, { useState } from 'react';

interface IntakeFormProps {
  onNavigate: (page: string) => void;
}

const IntakeForm: React.FC<IntakeFormProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    type: 'Cyber / online fraud',
    time: '',
    description: ''
  });
  const [consent, setConsent] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert('Please tick the consent box to proceed.');
      return;
    }
    setFormSubmitted(true);
    // In a real app, this would submit to a backend
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Suraksha Help</div>
          <h2>Tell us what happened — we'll take it from here</h2>
          <p>
            A friendly Suraksha Fellow will help you navigate reporting and paperwork. Need legal advice? We'll connect you to a verified advocate.
          </p>
        </div>

        <div className="form-card">
          <span className="helper">
            <svg width="130" height="150" viewBox="0 0 130 150">
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
          </span>
          
          <div>
            <label>What happened?</label>
            <select 
              value={formData.type} 
              onChange={(e) => handleInputChange('type', e.target.value)}
            >
              <option>Cyber / online fraud</option>
              <option>Financial fraud</option>
              <option>Harassment</option>
              <option>Other</option>
            </select>

            <label>When did it happen?</label>
            <select 
              value={formData.time} 
              onChange={(e) => handleInputChange('time', e.target.value)}
            >
              <option value="">Select when</option>
              <option value="recent">In the last few hours</option>
              <option value="today">Today</option>
              <option value="week">This week</option>
              <option value="earlier">Earlier</option>
            </select>

            <label>Briefly, what occurred? (Never share passwords or OTPs)</label>
            <textarea 
              placeholder="e.g. I received a call claiming…"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={4}
            />

            <div className="consent">
              <input 
                type="checkbox" 
                id="consent" 
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <label htmlFor="consent" style={{margin: 0, fontWeight: 400}}>
                I'm okay with Suraksha using these details only to help me. My data is minimised, stored securely in India, and never sold. <b>(Prototype — nothing is actually stored.)</b>
              </label>
            </div>

            <button 
              className="btn btn-gold btn-lg" 
              onClick={handleSubmit}
            >
              Send to Suraksha Help
            </button>

            {formSubmitted && (
              <div className="form-msg" style={{display: 'block', background: 'var(--sky)', color: '#0f6553', borderRadius: '12px', padding: '15px', marginTop: '16px', fontFamily: 'var(--round)', fontWeight: '600'}}>
                Thanks — in the live service a Suraksha Fellow would reach out within minutes. (Prototype: nothing stored.)
              </div>
            )}

            <div className="triage">
              <div className="tr">
                <b>Self-serve</b>
                <span>Instant guidance from the right scam guide.</span>
              </div>
              <div className="tr">
                <b>A Suraksha Fellow</b>
                <span>A trained volunteer helps you navigate it.</span>
              </div>
              <div className="tr">
                <b>Advocate Panel</b>
                <span>Escalation to a verified advocate.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntakeForm;