import React from 'react';
import { RESOURCES } from '../data/data';

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const handleForward = (resource: typeof RESOURCES[0]) => {
    alert(`In a live service, this would forward the "${resource.title}" resource to WhatsApp or share it.`);
  };

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Resources</div>
          <h2>Grab-and-forward library</h2>
        </div>

        <div className="grid">
          {RESOURCES.map((resource, index) => (
            <div 
              key={index} 
              className="scard" 
              style={{cursor: 'default'}}
            >
              <span className={`tag ${resource.className}`} style={{alignSelf: 'flexStart', marginBottom: '10px'}}>
                {resource.type}
              </span>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <div style={{marginTop: '14px'}}>
                <span 
                  className="wa" 
                  onClick={() => handleForward(resource)}
                >
                  ↗ Forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesPage;