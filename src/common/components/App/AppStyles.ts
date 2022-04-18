import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

import { Colors } from '../../basics/Colors';

export const DefaultStyle = createGlobalStyle`
  ${normalize};
  
  html, body, #root {
    height: 100%;
    width: 100%;
    color: ${Colors.dirtyWhite300};
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
