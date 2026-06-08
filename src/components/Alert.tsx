import React from 'react';

interface AlertProps {
  onClose: () => void;
}

export const Alert: React.FC<AlertProps> = ({ onClose }) => {
  return (
    <div className="alert" id="alert">
      <div className="wrap">
        <span className="pulse"></span>
        <span>
          <b>Heads up this week:</b> fake "police video-call" scams spotted in Andheri & Powai. Know the trick → you're safe.
        </span>
        <button className="x" onClick={onClose}>×</button>
      </div>
    </div>
  );
};