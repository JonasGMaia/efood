import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa1: '#E66767',
  rosa2: '#FFF8F2',
  rosa3: '#FFEBD9',
  branco: '#FFFFFF',
  darkLayer1: '#00000080',
  darkLayer2: '#000000CC'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
    body {
    background-color: ${cores.rosa2};
    color: ${cores.rosa1};
  }
    .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 20px;
  }
  `
