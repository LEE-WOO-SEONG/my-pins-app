import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 10%;
  }

  div#root {
    display: grid;
    background-color: orange;
    min-height: 100vh;
    grid-template: 50px 1fr / 1fr 6fr;
    grid-template-areas:
      'sidebar header'
      'sidebar main'
    ;
  }
  section.header {
    grid-area: header;
    background-color: pink;
  }
  section.sidebar {
      grid-area: sidebar;
      background-color: skyblue;
    }
  section.main {
    grid-area: main;
    background-color: grey;
  }
`;
