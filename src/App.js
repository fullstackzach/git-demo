import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        Count: {count}
      </header>
    </div>
  );
}

export default App;
