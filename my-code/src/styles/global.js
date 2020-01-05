import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import './primeflex.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${variables.COLOR_DARK};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    color: ${variables.COLOR_DEFAULT};
    font-family: 'Roboto', sans-serif;
    font-size: ${variables.FONT_SIZE_REGULAR};
    font-weight: ${variables.FONT_WEIGHT_REGULAR};
    letter-spacing: 0.16pt;
    line-height: 24pt;
  }

  #root {
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
    background: ${variables.COLOR_DARK};
    color: ${variables.COLOR_SECONDARY};
    border: 1px solid ${variables.COLOR_SECONDARY};
    border-radius: ${variables.BORDER_RADIUS};
    padding: 12px 16px 12px 12px;

    &:hover {
      border-color: ${variables.COLOR_ACTIVE};
      color: ${variables.COLOR_DEFAULT};
    }

    &.active {
      background: ${variables.COLOR_RED};
      border-color: ${variables.COLOR_RED};
      color: ${variables.COLOR_DEFAULT};
    }
  }

  // TYPOGRAPHY

  .text-big {
    font-size: ${variables.FONT_SIZE_BIG};
    font-weight: ${variables.FONT_WEIGHT_MEDIUM};
    letter-spacing: 0.2pt;
    line-height: 28pt;
  }
  .text-bigger {
    font-size: ${variables.FONT_SIZE_BIGGER};
    font-weight: ${variables.FONT_WEIGHT_MEDIUM};
    letter-spacing: 0.2pt;
    line-height: 30pt;
  }
  .text-giant {
    font-size: ${variables.FONT_SIZE_GIANT};
    font-weight: ${variables.FONT_WEIGHT_BOLD};
    letter-spacing: 0.8pt;
    line-height: 88pt;
  }

  // PAGINATION

  ul.pagination {
    display: flex;
    list-style: none;
    justify-content: center;
    margin: 15px 0;

    li {
      cursor: pointer;
      background-color: ${variables.COLOR_MIDGREY};
      border: 1px solid  ${variables.COLOR_GREY};
      border-radius: ${variables.BORDER_RADIUS};
      margin: 0 6px;
      padding: 5px 10px;

      &.active {
        background-color: ${variables.COLOR_YELLOW};
      }

      &.previous, &.next {
        display: none;
      }
    }
  }
`;
