import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  
  const STARTING_TIME = 5;

  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
        setTimeout(() => {
            setTimeRemaining(time => time - 1);
        }, 1000)
    } else if (isTimeRunning && timeRemaining === 0) {
      endGame();
    }
  // eslint-disable-next-line
  }, [timeRemaining, isTimeRunning]);

  function handleChange(e) {
    setText(e.target.value);
  };

  function calculateWordCount(text) {
    const wordsArr = text.split(' ');
    return wordsArr.filter(word => word !== '').length;
  };

  function startGame() {
    setIsTimeRunning(true);
    setText('');
    setTimeRemaining(STARTING_TIME);
    setWordCount(0);
    textBoxRef.current.focus()
  };

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

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
