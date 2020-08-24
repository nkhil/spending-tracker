import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function Button({ className, text, path }) {
  const history = useHistory();

  const routeChange = () => {
    history.push(path);
  };

  return (
    <button
      type="button"
      onClick={routeChange}
      className={className}
    >
      {text}
    </button>
  );
}

const StyledButton = styled(Button)`
  padding: 10px 20px;
  background-color: #E8EEFC;
  color: #426BAD;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  &:hover {
      background-color: #E8EEFC;
    }
  &:focus {
    outline:none;
  }
`;

export default StyledButton;
