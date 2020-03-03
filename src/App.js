import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount((count + 1) * 2)}>Multiply</button>
        <button onClick={() => setCount(Math.sqrt(count))}>Square root</button>
        Multiplier: {count}
      </header>
    </div>
  );
}

export default App;
