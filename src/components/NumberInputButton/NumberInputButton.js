import React from 'react';
import styled from 'styled-components';

function NumberInputButton({
  className, number, increment, decrement,
}) {
  return (
    <div className={className}>
      <button
        type="button"
        className="number-input-button_add"
        onClick={() => increment(number)}
      >
        +

      </button>
      <button type="button" className="number-input-button_number">
        {number}
      </button>
      <button
        type="button"
        className="number-input-button_subtract"
        onClick={() => decrement(number)}
      >
        -

      </button>
    </div>
  );
}

const StyledNumberInputButton = styled(NumberInputButton)`
  display: flex;
  flex-direction: column;
  display: inline;
  font-size: 1.5rem;
  background-color: #F3F4F6;

  .number-input-button_add {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px 3px 0 0;
    width: 50px;
    padding: 10px 0;
    border: 0;
    border-bottom: 1px solid black;
  }

  .number-input-button_subtract {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px 3px 0 0;
    width: 50px;
    padding: 10px 0;
    border: 0;
    border-top: 1px solid black;
  }

  .number-input-button_number {
    width: 50px;
    padding: 10px 0;
    border: 0;
  }
`;

export default StyledNumberInputButton;
