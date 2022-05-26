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
  { type, payload }: { type: string; payload?: any }
) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === '0' && state.currentOperand === '0') return state;
      if (payload.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (
        state.previousOperand === undefined &&
        state.currentOperand === undefined
      ) {
        return state;
      }
      if (state.previousOperand === undefined) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: undefined,
        };
      }
      return {
        ...state,
        operation: payload.operation,
        previousOperand: evaluation(state),
        currentOperand: undefined,
      };
    case ACTIONS.CLEAR:
      return {};
    default:
      return state;
  }
}

const evaluation = ({ currentOperand, previousOperand, operation }: any) => {
  if (currentOperand === undefined || previousOperand === undefined) {
    return undefined;
  }

  switch (operation) {
    case '+':
      return parseFloat(previousOperand) + parseFloat(currentOperand);
    case '-':
      return parseFloat(previousOperand) - parseFloat(currentOperand);
    case '*':
      return parseFloat(previousOperand) * parseFloat(currentOperand);
    case '÷':
      return parseFloat(previousOperand) / parseFloat(currentOperand);
    default:
      return undefined;
  }
};

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] =
    React.useReducer(reducer, {});

  console.log(currentOperand, previousOperand, operation);

  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>
          {previousOperand} {operation}
        </div>
        <div className='current-operand'>{currentOperand}</div>
      </div>
      <button
        className='span-two'
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button>DEL</button>
      <OperationButton operation='÷' dispatch={dispatch} />
      <DigitButton digit='1' dispatch={dispatch} />
      <DigitButton digit='2' dispatch={dispatch} />
      <DigitButton digit='3' dispatch={dispatch} />
      <OperationButton operation='*' dispatch={dispatch} />
      <DigitButton digit='4' dispatch={dispatch} />
      <DigitButton digit='5' dispatch={dispatch} />
      <DigitButton digit='6' dispatch={dispatch} />
      <OperationButton operation='+' dispatch={dispatch} />
      <DigitButton digit='7' dispatch={dispatch} />
      <DigitButton digit='8' dispatch={dispatch} />
      <DigitButton digit='9' dispatch={dispatch} />
      <OperationButton operation='-' dispatch={dispatch} />
      <DigitButton digit='.' dispatch={dispatch} />
      <DigitButton digit='0' dispatch={dispatch} />
      {/* <DigitButton digit='9' dispatch={dispatch} /> */}

      <button className='span-two'>=</button>
    </div>
  );
}

export default App;
