import React from 'react';

const OperationButton = ({
  operation,
  dispatch,
}: {
  operation: string;
  dispatch: any;
}) => {
  return <button onClick={dispatch}>{operation}</button>;
};

export default OperationButton;
