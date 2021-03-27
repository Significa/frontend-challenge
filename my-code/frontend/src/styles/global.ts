import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #0A1014;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
