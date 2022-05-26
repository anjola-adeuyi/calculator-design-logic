import { ACTIONS } from '../App';

const OperationButton = ({
  operation,
  dispatch,
}: {
  operation: string;
  dispatch: any;
}) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};

export default OperationButton;
