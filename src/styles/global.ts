import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
  }

  html,
  body {
    background-color: #1E1E1E;
    user-select: none;
    height: 100%;
    font-family: sans-serif;
    color: #FFF;
  }
`;

export default GlobalStyles;
