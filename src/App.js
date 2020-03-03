import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount((count + 1) * 2)}>Increment</button>
        Multiplier: {count}
      </header>
    </div>
  );
}

export default App;
