import React from 'react';
import './App.css';

function App() {
  
  const [text, setText] = React.useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.split(' ');
    return wordsArr.filter(word => word !== '').length;
  }

  return (
    <main>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text}/>
      <h4>Time remaining: ???</h4>
      <button onClick={() => calculateWordCount(text)}>START</button>
      <h1>Word Count: ???</h1>
    </main>
  );
};

export default App;
