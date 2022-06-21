import React from 'react';

const ButtonRemove = (props) => {
  return (
    <button onClick={() => props.deleteFunction(props.parameter)}>
      Remover
    </button>
  );
};

export default ButtonRemove;
