import logo from './logo.svg';
import './App.css';
import React from 'react';
import owl from './reentry-owl.jpg';

function openInNewTab(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

function App() {
  return (
    <div className="App">
      <div className="owl-logo">
      <a botton onClick={() => openInNewTab("https://www.youtube.com/watch?v=dQw4w9WgXcQ")} > 
        <img src={owl} alt='owl'/>
        </a>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
