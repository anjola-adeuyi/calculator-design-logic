import React from 'react';
import './App.css';
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
};

function reducer(
  state: any,
  { type, payload }: { type: string; payload: any }
) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
        operation: payload.operation,
        previousOperand: state.currentOperand,
        currentOperand: '',
      };
    default:
      return state;
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] =
    React.useReducer(reducer, {});

  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>
          {previousOperand} {operation}
        </div>
        <div className='current-operand'>{currentOperand}</div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <OperationButton operation='÷' dispatch={dispatch} />
      {/* <button>÷</button> */}
      <DigitButton digit='1' dispatch={dispatch} />
      <DigitButton digit='2' dispatch={dispatch} />
      <DigitButton digit='3' dispatch={dispatch} />

      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className='span-two'>=</button>
    </div>
  );
}

export default App;
