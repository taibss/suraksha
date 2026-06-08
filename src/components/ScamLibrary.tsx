import React, { useState } from 'react';
import { SCAMS } from '../data/scams';

interface ScamLibraryProps {
  onNavigate: (page: string) => void;
}

const ScamLibrary: React.FC<ScamLibraryProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTarget, setSelectedTarget] = useState('');

  // Get unique categories and targets for filters
  const categories = [...new Set(SCAMS.map(scam => scam.category))];
  const targets = [...new Set(SCAMS.flatMap(scam => scam.targets))];

  // Filter scams based on search and filters
  const filteredScams = SCAMS.filter(scam => {
    const matchesSearch = scam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scam.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || scam.category === selectedCategory;
    const matchesTarget = !selectedTarget || scam.targets.includes(selectedTarget);

    return matchesSearch && matchesCategory && matchesTarget;
  });

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Know the Scams</div>
          <h2>Meet the tricks (so they can't trick you)</h2>
          <p>
            Each one in friendly plain language: what it is, the red flags, how to stay safe, and exactly what to do if it's already happened.
          </p>
        </div>
        
        <div className="filters">
          <input
            type="text"
            placeholder="Search a scam…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select
            value={selectedTarget}
            onChange={(e) => setSelectedTarget(e.target.value)}
          >
            <option value="">Anyone targeted</option>
            {targets.map(target => (
              <option key={target} value={target}>{target}</option>
            ))}
          </select>
        </div>

        <div className="grid">
          {filteredScams.length > 0 ? (
            filteredScams.map(scam => (
              <div 
                key={scam.id} 
                className="scard" 
                onClick={() => onNavigate('detail')}
              >
                <div className="cat">
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
                </div>
                <span className="tag a" style={{alignSelf: 'flexStart', marginBottom: '8px'}}>{scam.category}</span>
                <h3>{scam.title}</h3>
                <p>{scam.description}</p>
                <div className="meta">
                  {scam.targets.map(target => <span className="tag">{target}</span>)}
                </div>
              </div>
            ))
          ) : (
            <p style={{color: 'var(--muted)', textAlign: 'center', width: '100%', padding: '40px'}}>
              No scams match your filter.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScamLibrary;