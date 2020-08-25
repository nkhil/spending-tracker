import React from 'react';
import styled from 'styled-components';

import googleLogo from '../../images/google.png';

function LoginWithGoogle({ className, text, onClick }) {
  return (
    <div className={className}>
      <button onClick={onClick} type="button">
        <img src={googleLogo} alt="google logo" />
        {text}
      </button>
    </div>
  );
}

const StyledLoginWithGoogle = styled(LoginWithGoogle)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    border: 1px solid #D0D0D0;
    background-color: #FFF;
    border-radius: 5px;
    color: #000;
    font-size: 1rem;
    padding: 15px 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 250px;
    transition:visibility 0.3s linear,opacity 0.3s linear;
    

    &:hover {
      cursor: pointer;
      border-color: black;
    }

    &:focus {
      outline:0;
    }
  }
  
  img {
    width: 20px;
    margin-right: 10px;
  }
`;

export default StyledLoginWithGoogle;
