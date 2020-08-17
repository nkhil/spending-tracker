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
  background-color: #E8EEFC;
  color: #426BAD;
  border-radius: 8px;
  display: inline;
  margin: 5px;
  font-size: 1.5rem;
  border: 0;
  padding: 5px 10px;
`;

export default StyledMerchantNameButton;
