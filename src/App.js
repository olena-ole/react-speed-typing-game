import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
        setTimeout(() => {
            setTimeRemaining(time => time - 1)
        }, 1000)
    } else if (isTimeRunning && timeRemaining === 0) {
      setIsTimeRunning(false)
    }
  }, [timeRemaining, isTimeRunning])

  function handleChange(e) {
    setText(e.target.value);
  }

  // function calculateWordCount(text) {
  //   const wordsArr = text.split(' ');
  //   return wordsArr.filter(word => word !== '').length;
  // }

  function startCountdown() {
    setIsTimeRunning(true)
  }

  return (
    <main>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text}/>
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startCountdown}>START</button>
      <h1>Word Count: ???</h1>
    </main>
  );
};

export default App;
