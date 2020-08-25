import React from 'react';
import styled from 'styled-components';
import { GoZap } from 'react-icons/go';
import SignInWithGoogleButton from '../SignInWithGoogleButton';
import { signInWithGoogle } from '../../lib/google';

function Login({ className }) {
  const handleGoogleLogin = () => signInWithGoogle();

  return (
    <div className={className}>
      <div className="box">
        <div className="logo-circle">
          <GoZap
            size={32}
            color="#426BAD"
            className="spending-tracker-logo"
          />
        </div>
        <h2>An easy to use manual spending tracker</h2>
        <SignInWithGoogleButton text="Sign in with Google" onClick={handleGoogleLogin} />
      </div>
    </div>
  );
}

const StyledLogin = styled(Login)`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  h2 {
    padding: 10px;
    text-align: center;
    color: #426BAD;
    font-weight: 200;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo-circle {
    padding: 10px;
    border-radius: 50%;
    background-color: #E8EEFC;
  }

`;

export default StyledLogin;
