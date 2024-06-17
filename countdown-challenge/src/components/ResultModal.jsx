import React from 'react';

function ResultModal({ result, closeModal }) {
  if (!result) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Your Score: {result.score}</h2>
        <p>The target time was {result.time} seconds.</p>
        <p>You stopped the timer at {result.actualElapsedTime.toFixed(2)} seconds.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default ResultModal;
