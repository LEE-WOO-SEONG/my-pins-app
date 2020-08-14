import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    user-select: none;
  }
  body {
    margin: 0;
    padding: 3% 10%;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
  }

  ul{
    list-style: none;
    padding: 0
  }
  li{
    display: inline-flex;
  }

  div#root {
    display: grid;
    min-height: 100vh;
    grid-template: 50px 1fr / 1fr 5fr;
    grid-template-areas:
      'sidebar header'
      'sidebar main'
    ;
  }
  section.header {
    grid-area: header;
    position: relative;
  }
  section.sidebar {
      grid-area: sidebar;
    }
  section.main {
    grid-area: main;
    padding: 24px;
  }
`;
