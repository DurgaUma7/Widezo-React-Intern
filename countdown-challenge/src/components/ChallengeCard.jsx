import React, { useState, useEffect } from 'react';

function ChallengeCard({ difficulty, time, setResult }) {
  const [timerActive, setTimerActive] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let id;

    if (timerActive) {
      id = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 0.1);
      }, 100);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(id);
  }, [timerActive]);

  const startChallenge = () => {
    setTimerActive(true);
    setStartTime(Date.now());
    setElapsedTime(0);

    setTimeout(() => {
      stopChallenge();
    }, time * 1000);
  };

  const stopChallenge = () => {
    setTimerActive(false);
    const endTime = Date.now();
    const actualElapsedTime = (endTime - startTime) / 1000;
    const score = Math.max(0, 100 - Math.abs(time - actualElapsedTime) * 100);
    setResult({ difficulty, time, actualElapsedTime, score });
  };

  return (
    <div className="challenge-card">
      <h3>{difficulty}</h3>
      <p>{time} seconds</p>
      <button onClick={startChallenge} disabled={timerActive}>
        {timerActive ? 'Timer Active' : 'Start Challenge'}
      </button>
      {timerActive && (
        <>
          <button onClick={stopChallenge}>Stop Timer</button>
          <p>Elapsed Time: {elapsedTime.toFixed(1)} seconds</p>
        </>
      )}
    </div>
  );
}

export default ChallengeCard;
