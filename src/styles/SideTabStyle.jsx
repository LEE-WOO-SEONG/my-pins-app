import styled, { css } from 'styled-components';

export const SideTab = styled.section`
  margin-top: 50px;
  border-right: rgb(56, 68, 77) 1px solid;
  ${commonstyle()} button {
    padding: 20px 30px;
  }
`;

function commonstyle() {
  return css`
    ul {
      padding-left: 0;
      padding-right: 20px;
      list-style-type: none;
      min-height: 500px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      li > a {
        color: ${props => props.theme.color};
        font-weight: bold;
        font-size: 1.5rem;
        text-decoration: none;
        padding: 15px 30px;
        margin-left: -20px;
        border-radius: 9999px;
        background-color: transparent;
        transition: background-color 0.3s;

        cursor: pointer;

        &:hover {
          background-color: ${props => props.theme.sideTabHover};
        }

        span {
          margin-left: 5px;
        }
      }

      button {
        position: relative;
        font-size: 1.03rem;
        background-color: ${props => props.theme.sideBtnColor};
        color: rgb(255, 255, 255);
        border: none;
        width: 100%;
        border-radius: 9999px;
        cursor: pointer;
      }
    }
  `;
}
