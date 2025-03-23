import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (number) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator) => {
    setEquation(display + operator);
    setDisplay('0');
  };

  const handleEqual = () => {
    const result = eval(equation + display);
    setDisplay(result.toString());
    setEquation('');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="equation">{equation}</div>
        <div className="current">{display}</div>
      </div>
      <div className="buttons">
        <button onClick={handleClear} className="btn clear">C</button>
        <button onClick={() => handleOperator('/')} className="btn operator">÷</button>
        <button onClick={() => handleOperator('*')} className="btn operator">×</button>
        <button onClick={() => handleOperator('-')} className="btn operator">-</button>
        <button onClick={() => handleNumber('7')} className="btn">7</button>
        <button onClick={() => handleNumber('8')} className="btn">8</button>
        <button onClick={() => handleNumber('9')} className="btn">9</button>
        <button onClick={() => handleOperator('+')} className="btn operator">+</button>
        <button onClick={() => handleNumber('4')} className="btn">4</button>
        <button onClick={() => handleNumber('5')} className="btn">5</button>
        <button onClick={() => handleNumber('6')} className="btn">6</button>
        <button onClick={handleEqual} className="btn equal">=</button>
        <button onClick={() => handleNumber('1')} className="btn">1</button>
        <button onClick={() => handleNumber('2')} className="btn">2</button>
        <button onClick={() => handleNumber('3')} className="btn">3</button>
        <button onClick={() => handleNumber('0')} className="btn zero">0</button>
        <button onClick={() => handleNumber('.')} className="btn">.</button>
      </div>
    </div>
  );
}

export default App; 