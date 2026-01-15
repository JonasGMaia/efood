import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa1: '#E66767',
  rosa2: '#FFF8F2',
  rosa3: '#FFEBD9',
  branco: '#FFFFFF',
  darkLayer1: '#00000080',
  darkLayer2: '#000000CC',
  cinza: '#6b6b6bff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }
    body {
    background-color: ${cores.rosa2};
    color: ${cores.rosa1};
    display: flex;
    flex-direction: column;
  }
    .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0px 20px;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
    a{
    text-decoration: none;}

  `
