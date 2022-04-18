import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const DefaultStyle = createGlobalStyle`
  ${normalize};
  
  html, body, #root {
    height: 100%;
    width: 100%;
  }
  
  fieldset, h1, h2, h3, h4, h5, p {
    padding: 0;
    margin: 0;
  }
  
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
`;
