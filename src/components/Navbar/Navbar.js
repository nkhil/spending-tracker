import React from 'react';
import styled from 'styled-components';
import { HiMenu, HiX } from 'react-icons/hi';
import navbarItems from '../../constants/navbar-items';
import firebase from '../../lib/firebase';

function Navbar({ className, isVisible, setIsVisible }) {
  const handleKeyPress = (e) => {
    if (e.keyCode === 83) {
      firebase.auth().signOut();
    }
  };

  return (
    <>
      <div className={className}>
        <div className="navbar-icon">
          <HiMenu
            size={32}
            color="#000"
            className="spending-tracker-burger-menu"
            onClick={() => setIsVisible(true)}
          />
          <HiX
            size={32}
            color="#000"
            className="spending-tracker-cross-icon"
            onClick={() => setIsVisible(false)}
          />
        </div>
        <div className="navbar-unordered-list">
          <ul>
            {navbarItems.map((x) => (
              <li key={x.key}>
                <a href={x.path}>{x.name}</a>
              </li>
            ))}
            <div onClick={() => firebase.auth().signOut()} onKeyPress={handleKeyPress} role="button" tabIndex={0}>
              <li>
                Sign out
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

const StyledNavbar = styled(Navbar)`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */

  .navbar-icon {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .spending-tracker-burger-menu {
    display: ${(props) => {
    if (!props.isVisible) return 'block';
    return 'none';
  }};
    margin-right: 10px;
    cursor: pointer;
  }

  .spending-tracker-cross-icon {
    display: ${(props) => {
    if (props.isVisible) {
      return 'block';
    }
    return 'none';
  }}
  }

  .navbar-unordered-list {
    display: ${(props) => {
    if (props.isVisible) {
      return 'flex';
    }
    return 'none';
  }};
    flex-direction: column;
    text-align: center;
    align-items: center;

    ul {
      li {
        padding: 10px 5px;
        font-size: 1.2rem;

        a {
          text-decoration: none;

          &:visited {
            color: inherit;
            text-decoration: none;
          }
        }
      }
    }
  }
`;

export default StyledNavbar;
