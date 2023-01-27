import { createGlobalStyle } from 'styled-components';

import Dana from '../assets/font/dana-regular.ttf';
import Sans from '../assets/font/IRANSansWeb(FaNum)_Medium.woff'

export default createGlobalStyle`
   @font-face {
    font-family: Dana;
    src: url(${Dana}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;