import React, { useState } from 'react';
import { LAWYERS } from '../data/data';

interface LawyerDirectoryProps {
  onNavigate: (page: string) => void;
}

const LawyerDirectory: React.FC<LawyerDirectoryProps> = ({ onNavigate }) => {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedPractice, setSelectedPractice] = useState('');

  // Get unique options for filters
  const areas = [...new Set(LAWYERS.map(lawyer => lawyer.area))];
  const languages = [...new Set(LAWYERS.flatMap(lawyer => lawyer.languages))];
  const practices = [...new Set(LAWYERS.map(lawyer => lawyer.practice))];

  // Filter lawyers based on selections
  const filteredLawyers = LAWYERS
    .sort(() => Math.random() - 0.5) // Random order
    .filter(lawyer => {
      const matchesArea = !selectedArea || lawyer.area === selectedArea;
      const matchesLanguage = !selectedLanguage || lawyer.languages.includes(selectedLanguage);
      const matchesPractice = !selectedPractice || lawyer.practice === selectedPractice;
      
      return matchesArea && matchesLanguage && matchesPractice;
    });

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow teal">Find Verified Help</div>
          <h2>Friendly, verified advocates never ranked</h2>
        </div>
        
        <div className="notice">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f6553" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4m0-4h.01"/>
          </svg>
          <span>
            <b>How this works:</b> we list advocates whose identity and Bar enrolment we've verified. We do <b>not</b> recommend, rank or rate them, and nobody can pay for placement. The order below shuffles on every visit. Your choice stays yours.
          </span>
        </div>

        <div className="filters">
          <select 
            value={selectedArea} 
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            <option value="">All areas</option>
            {areas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
          
          <select 
            value={selectedLanguage} 
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="">Any language</option>
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
          
          <select 
            value={selectedPractice} 
            onChange={(e) => setSelectedPractice(e.target.value)}
          >
            <option value="">Any practice area</option>
            {practices.map(practice => (
              <option key={practice} value={practice}>{practice}</option>
            ))}
          </select>
        </div>

        <div className="lawyers">
          {filteredLawyers.length > 0 ? (
            filteredLawyers.map((lawyer, index) => (
              <div key={index} className="lcard">
                <span className="av">
                  <svg width="46" height="46" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="24" fill={['#fff3d6','#e3f7f1','#efeaff','#ffe9ec','#e9f2ff','#eafbe9'][lawyer.variant % 6]}/>
                    <circle cx="24" cy="21" r="11" fill={['#f0bf95','#e8b48a','#d4a878','#f1c9a5','#c9966b','#e8c0a0'][lawyer.variant % 6]}/>
                    <path d="M12 22a12 12 0 0 1 24 0c0 3-2 5-3 7l-2-9-4 5-3-6-4 6-3-5-2 9c-1-2-3-4-3-7z" fill={['#3a2c4f','#2a2438','#4a3a2a','#5a4a3a','#2a3440','#3a2a2a'][lawyer.variant % 6]}/>
                    <circle cx="20" cy="21" r="1.6" fill="#33324a"/>
                    <circle cx="28" cy="21" r="1.6" fill="#33324a"/>
                    <path d="M21 26q3 2 6 0" stroke="#a86b4a" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
                    <path d="M9 46a15 15 0 0 1 30 0z" fill={['#7b6bd6','#2cc4a6','#f7b32b','#ff6b6b','#5a8de0','#3aa86a'][lawyer.variant % 6]}/>
                  </svg>
                </span>
                <div>
                  <h4>
                    {lawyer.name} 
                    <span className="verified">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#159e83" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg> Verified
                    </span>
                  </h4>
                  <div className="det">{lawyer.area} · {lawyer.practice}</div>
                  <div className="chips">
                    {lawyer.languages.map(lang => <span className="tag">{lang}</span>)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{color: 'var(--muted)', textAlign: 'center', width: '100%', padding: '40px'}}>
              No advocates match your filter.
            </p>
          )}
        </div>

        <div className="transp">
          <div className="eyebrow" style={{color: 'var(--gold)'}}>Before you engage</div>
          <h3 style={{margin: '.3em 0'}}>What a typical engagement looks like</h3>
          <p style={{color: '#cdd1f1', maxWidth: '60ch'}}>
            So you know what to expect and are never overcharged. Suraksha never handles your payment and never takes a cut.
          </p>
          <div className="flow">
            <span>1 · Consultation</span>
            <span>2 · Notice drafting & vetting</span>
            <span>3 · Filing / complaint</span>
            <span>4 · Follow-up</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerDirectory;