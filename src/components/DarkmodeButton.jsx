import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { ThemeToggle } from '../App';

const StyledButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 80px;
  height: 40px;
  border-radius: 9999px;
  border: 2px solid #fff;
  background-color: #343a40;
  cursor: pointer;

  span {
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.theme.bgColor};
    transition: transform 0.4s;

    ${props =>
      !props.theme.bool &&
      css`
        transform: translateX(40px);
      `}
  }
`;

function DarkModeButton() {
  const themeChange = useContext(ThemeToggle);

  return (
    <StyledButton onClick={click}>
      <span />
    </StyledButton>
  );

  function click() {
    themeChange();
  }
}

export default DarkModeButton;
