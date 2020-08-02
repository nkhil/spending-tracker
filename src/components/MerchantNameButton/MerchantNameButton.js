import React from 'react';
import styled from 'styled-components';

function MerchantNameButton({ className, text, onClick }) {
  const handleClick = () => onClick(text);

  return (
    <button
      className={className}
      type="button"
      onClick={handleClick}
      key={text}
    >
      {text}
    </button>
  );
}

const StyledMerchantNameButton = styled(MerchantNameButton)`
  background-color: pink;
  border-radius: 8px;
  display: inline;
  margin: 5px;
  font-size: 1.5rem;
`;

export default StyledMerchantNameButton;
