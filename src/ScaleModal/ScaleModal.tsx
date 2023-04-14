import React, { useState } from 'react';
import './ScaleModal.css';

interface ScaleModalProps {
  isOpen: boolean;
  onClose: (distanceInCm: number) => void;
}

const ScaleModal: React.FC<ScaleModalProps> = ({ isOpen, onClose }) => {
  const [distanceInM, setDistanceInM] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (distanceInM !== '') {
      onClose(Number(distanceInM));
    }
  };

  if (!isOpen) return null;

  return (
    <div className='scale-modal'>
      <div className='scale-modal-content'>
        <h3>Set the scale</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor='distance-in-cm'>Distance in m:</label>
          <input
            autoFocus
            type='number'
            value={distanceInM}
            onChange={(e) => setDistanceInM(parseFloat(e.target.value))}
          />
          <button type='submit' onClick={() => onClose(Number(distanceInM))}>
            Set scale
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScaleModal;
