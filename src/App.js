import React from 'react';
import useWordGame from './useWordGame';

function App() {
  
  const {
    textBoxRef, 
    handleChange, 
    text, 
    isTimeRunning, 
    timeRemaining, 
    startGame, 
    wordCount
  } = useWordGame(10);

  return (
    <main>
      <h1>How fast do you type?</h1>
      <textarea 
        onChange={handleChange} 
        value={text} 
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button 
        onClick={startGame} 
        disabled={isTimeRunning}>
          START
      </button>
      <h1>Word Count: {wordCount}</h1>
    </main>
  );
};

export default App;
