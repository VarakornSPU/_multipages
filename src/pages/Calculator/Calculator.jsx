import React, { useState } from 'react';
import './Calculator.css'; // Assuming you have styles in Calculator.css

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [lastResult, setLastResult] = useState('');

  const numberDisplay = (input) => {
    setDisplay(prev => prev + input);
  };

  const clearClicked = () => {
    setDisplay('');
    setLastResult('');
  };

  const equalClicked = () => {
    try {
      const currentValue = eval(display); // Caution: eval can be dangerous if used with untrusted input
      setLastResult(currentValue);
      setDisplay(currentValue.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div id="container">
      <div id="input">
        <input id="display" type="text" value={display} disabled />
        <button className='btn btn-danger' onClick={clearClicked}>C</button>
      </div>
      <div>
        <button className='btn btn-primary' onClick={() => numberDisplay('7')}>7</button>
        <button className='btn btn-primary' onClick={() => numberDisplay('8')}>8</button>
        <button className='btn btn-primary' onClick={() => numberDisplay('9')}>9</button>
        <button className='btn btn-primary' onClick={() => numberDisplay('/')}>/</button>
      </div>
      <div>
        <button className='btn btn-primary' onClick={() => numberDisplay('4')}>4</button>
        <button className='btn btn-primary' onClick={() => numberDisplay('5')}>5</button>
        <button className='btn btn-primary' onClick={() => numberDisplay('6')}>6</button>
        <button className='btn btn-primary' onClick={() => numberDisplay('*')}>*</button>
      </div>
      <div>
        <button className='btn btn-primary' onClick={() => numberDisplay('1')}>1</button>
        <button className='btn btn-primary' onClick={() => numberDisplay('2')}>2</button>
        <button className='btn btn-primary' onClick={() => numberDisplay('3')}>3</button>
        <button className='btn btn-primary' onClick={() => numberDisplay('-')}>-</button>
      </div>
      <div>
        <button className='btn btn-primary' onClick={() => numberDisplay('0')}>0</button>
        <button className='btn btn-primary' onClick={() => numberDisplay('.')}>.</button>
        <button className='btn btn-primary' onClick={() => numberDisplay('+')}>+</button>
        <button className='btn btn-primary' onClick={equalClicked}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
