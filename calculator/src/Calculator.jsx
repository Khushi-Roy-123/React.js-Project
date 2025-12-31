import { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');

    const handleNumber = (num) => {
        setDisplay(display === '0' ? num : display + num);
        setEquation(equation + num);
    };

    const handleOperator = (op) => {
        setDisplay('0');
        setEquation(equation + ' ' + op + ' ');
    };

    const handleEqual = () => {
        try {
            // eslint-disable-next-line no-eval
            const result = eval(equation);
            setDisplay(String(result));
            setEquation(String(result));
        } catch (error) {
            setDisplay('Error');
            setEquation('');
        }
    };

    const handleClear = () => {
        setDisplay('0');
        setEquation('');
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="equation">{equation || '0'}</div>
                <div className="current">{display}</div>
            </div>
            <div className="keypad">
                <button className="clear" onClick={handleClear}>AC</button>
                <button className="operator" onClick={() => handleOperator('/')}>/</button>
                <button className="operator" onClick={() => handleOperator('*')}>×</button>
                <button onClick={() => handleNumber('7')}>7</button>
                <button onClick={() => handleNumber('8')}>8</button>
                <button onClick={() => handleNumber('9')}>9</button>
                <button className="operator" onClick={() => handleOperator('-')}>-</button>
                <button onClick={() => handleNumber('4')}>4</button>
                <button onClick={() => handleNumber('5')}>5</button>
                <button onClick={() => handleNumber('6')}>6</button>
                <button className="operator" onClick={() => handleOperator('+')}>+</button>
                <button onClick={() => handleNumber('1')}>1</button>
                <button onClick={() => handleNumber('2')}>2</button>
                <button onClick={() => handleNumber('3')}>3</button>
                <button className="equal" onClick={handleEqual}>=</button>
                <button onClick={() => handleNumber('0')} className="zero">0</button>
                <button onClick={() => handleNumber('.')}>.</button>
            </div>
        </div>
    );
}
