import React, { useState } from 'react';
import { FEED_ITEMS, CHART_DATA } from '../data/data';

interface CityWatchProps {
  onNavigate: (page: string) => void;
}

const CityWatch: React.FC<CityWatchProps> = ({ onNavigate }) => {
  const [hoveredBar, setHoveredBar] = useState<string | number | null>(null);

  // Mock data for the chart
  const chartData = CHART_DATA.map(([name, value]) => ({
    name,
    value: typeof value === 'string' ? parseInt(value) : value,
    color: (typeof value === 'string' ? parseInt(value) : value) > 70 ? '#f7b32b' : (typeof value === 'string' ? parseInt(value) : value) > 40 ? '#2cc4a6' : '#7b6bd6'
  }));

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">City Watch</div>
          <h2>What's going around so you're a step ahead</h2>
          <p>
            A moderated, pattern-level view of the city's scams (we never name individuals). It powers our weekly cards and the quarterly trend report.
          </p>
        </div>

        <div className="cw-grid">
          <div>
            <div className="feed-list">
              {FEED_ITEMS.map((item, index) => (
                <div key={index} className="feed-item">
                  <div className="top">
                    <span className={`tag ${item.className}`}>{item.tag}</span>
                    <span style={{fontSize: '.78rem', color: 'var(--muted)'}}>
                      {item.area} · {item.time}
                    </span>
                  </div>
                  <h4>{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="chart">
              <div className="eyebrow">Reported scams · last 30 days</div>
              <div style={{height: '14px'}}></div>
              
              <div style={{marginTop: '20px'}}>
                {chartData.map((item, index) => {
                  const maxValue = Math.max(...chartData.map(d => d.value));
                  const percentage = (item.value / maxValue) * 100;
                  
                  return (
                    <div 
                      key={index}
                      className="bar"
                      onMouseEnter={() => setHoveredBar(item.name)}
                      onMouseLeave={() => setHoveredBar(null)}
                      style={{position: 'relative'}}
                    >
                      <span className="bn">{item.name}</span>
                      <div className="track">
                        <div 
                          className="fill" 
                          style={{width: `${percentage}%`, background: item.color}}
                        ></div>
                      </div>
                      <span className="bv">{item.value}</span>
                      
                      {hoveredBar === item.name && (
                        <div style={{
                          position: 'absolute',
                          top: '-30px',
                          left: '0',
                          background: 'var(--navy)',
                          color: '#fff',
                          padding: '5px 10px',
                          borderRadius: '5px',
                          fontSize: '0.8rem',
                          whiteSpace: 'nowrap',
                          zIndex: 10
                        }}>
                          {item.value} reports
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <p style={{fontSize: '.78rem', color: 'var(--muted)', marginTop: '14px'}}>
                Illustrative mock data for the prototype.
              </p>
            </div>

            <div className="panel" style={{padding: '24px', marginTop: '20px'}}>
              <div className="eyebrow teal">Quarterly</div>
              <h3 style={{fontSize: '1.3rem', margin: '.3em 0'}}>Mumbai Cyber-Fraud Trend Report</h3>
              <p style={{color: 'var(--ink-soft)', fontSize: '.94rem'}}>
                The patterns, the hotspots, the money lost the story behind the headlines.
              </p>
              <button 
                className="btn btn-out" 
                style={{marginTop: '14px'}}
                onClick={() => {
                  alert('In a live service, this would download the latest quarterly report.');
                }}
              >
                Download (demo)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityWatch;