import React from 'react';

const ButtonAdd = ({ add }) => {
  return (
    <div>
      <button type="submit" onClick={add}>
        Adicionar
      </button>
    </div>
  );
};

export default ButtonAdd;
