import React, { useState } from 'react';

function NameForm({ setName }) {
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Set Name</button>
    </form>
  );
}

export default NameForm;
