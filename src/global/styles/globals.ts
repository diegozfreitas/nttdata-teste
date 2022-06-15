// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  *{
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6{
    margin-block-start: 0;
    margin-block-end: 0;
  }


`;

export default GlobalStyle;
