import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    user-select: none;
    outline:none;
  }
  body {
    margin: 0;
    padding: 0 10%;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
  }

  ul{
    list-style: none;
    padding: 0
  }
  li{
    margin: 15px 0;
    display: inline-block;
  }


  div#root {
    display: grid;
    min-height: 100vh;
    grid-template: 40px 2fr / 220px 6fr;
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
    padding: 10px 40px;
  }
`;
