import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; /* Empêche le défilement */
    font-family: 'Arial', sans-serif; /* Exemple de police de base */
    background-color: #f4f4f4; /* Couleur de fond par défaut */
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
