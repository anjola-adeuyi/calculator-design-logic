import { ACTIONS } from '../App';

const DigitButton = ({ digit, dispatch }: { digit: string; dispatch: any }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
