import { createGlobalStyle } from 'styled-components';

import Animation from './animation';
import Color from './color';
import Reset from './reset';
import Spacing from './spacing';
import Typography from './typography';

const Global = createGlobalStyle`
  ${Reset}
  ${Color}
  ${Spacing}
  ${Typography}
  ${Animation}
`;

export default Global;
