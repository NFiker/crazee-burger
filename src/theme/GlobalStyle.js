import { createGlobalStyle } from "styled-components";
import { theme } from "./index";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; 
    font-family: ${theme.fonts.style.uiFont}; 
    background-color: #f4f4f4; 
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Amatic SC';
    src: url('/fonts/Amatic_SC/AmaticSC-Regular.ttf') format('truetype'),
         url('/fonts/Amatic_SC/AmaticSC-Bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/OpenSans/OpenSans-Regular.ttf') format('truetype'),
         url('/fonts/OpenSans/OpenSans-Bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

`;

export default GlobalStyle;
