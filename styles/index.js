import { createGlobalStyle } from 'styled-components';

import Color from './color';
import Reset from './reset';
import Spacing from './spacing';
import Typography from './typography';

const Global = createGlobalStyle`
  ${Reset}
  ${Color}
  ${Spacing}
  ${Typography}
`;

export default Global;
