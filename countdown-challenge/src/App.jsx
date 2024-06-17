import React, { useState } from 'react';
import './index.css';
import NameForm from './components/NameForm';
import ChallengeCard from './components/ChallengeCard';
import ResultModal from './components/ResultModal';

function App() {
  const [name, setName] = useState('Unknown Entity');
  const [result, setResult] = useState(null);

  const closeModal = () => setResult(null);

  return (
    <div className="app">
      <header>
        <h1>The Almost Final Countdown</h1>
        <p>Stop the timer once you estimate that time is (almost) up</p>
        <h2>Welcome {name}</h2>
        <NameForm setName={setName} />
      </header>
      <div className="challenges">
        <ChallengeCard difficulty="Easy" time={1} setResult={setResult} />
        <ChallengeCard difficulty="Not Easy" time={5} setResult={setResult} />
        <ChallengeCard difficulty="Getting Tough" time={10} setResult={setResult} />
        <ChallengeCard difficulty="Pros Only" time={15} setResult={setResult} />
      </div>
      <ResultModal result={result} closeModal={closeModal} />
    </div>
  );
}

export default App;
