import React from 'react';
import logo from './logo.svg';
import './App.scss';

const App: React.FC = () => {
  enum Season { Winter, Spring, Summer, Autumn };
let current: Season = Season.Summer;
console.log(current);
current = Season.Autumn; // изменение значения
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
