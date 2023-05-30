import React from 'react';
import './App.css';
import Pokemon from './components/API';
import './assets/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pokemon />
      </header>
    </div>
  );
}

export default App;
