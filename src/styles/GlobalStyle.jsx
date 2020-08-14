import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 10%;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
  }

  div#root {
    display: grid;
    min-height: 100vh;
    grid-template: 50px 1fr / 1fr 6fr;
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
  }
`;
