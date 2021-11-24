import NexaHeavy_woff from 'assets/fonts/NexaHeavy.woff';
import NexaHeavy_woff2 from 'assets/fonts/NexaHeavy.woff2';
import NexaRegular_woff from 'assets/fonts/NexaRegular.woff';
import NexaRegular_woff2 from 'assets/fonts/NexaRegular.woff2';
import { css } from 'styled-components';

const fonts = css`
  @font-face {
    font-family: 'Nexa';
    src: url('${NexaHeavy_woff2}') format('woff2'),
      url('${NexaHeavy_woff}') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Nexa';
    src: url('${NexaRegular_woff2}') format('woff2'),
      url('${NexaRegular_woff}') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

export default fonts;
