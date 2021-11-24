import ArchiaBold_woff from 'assets/fonts/archia-bold.woff';
import ArchiaBold_woff2 from 'assets/fonts/archia-bold.woff2';
import ArchiaLight_woff from 'assets/fonts/archia-light.woff';
import ArchiaLight_woff2 from 'assets/fonts/archia-light.woff2';
import ArchiaMedium_woff from 'assets/fonts/archia-medium.woff';
import ArchiaMedium_woff2 from 'assets/fonts/archia-medium.woff2';
import ArchiaRegular_woff from 'assets/fonts/archia-regular.woff';
import ArchiaRegular_woff2 from 'assets/fonts/archia-regular.woff2';
import ArchiaSemiBold_woff from 'assets/fonts/archia-semibold.woff';
import ArchiaSemiBold_woff2 from 'assets/fonts/archia-semibold.woff2';
import ArchiaThin_woff from 'assets/fonts/archia-thin.woff';
import ArchiaThin_woff2 from 'assets/fonts/archia-thin.woff2';
import { css } from 'styled-components';

const fonts = css`
  @font-face {
    font-family: 'Archia';
    src: url('${ArchiaBold_woff2}') format('woff2'),
      url('${ArchiaBold_woff}') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Archia';
    src: url('${ArchiaSemiBold_woff2}') format('woff2'),
      url('${ArchiaSemiBold_woff}') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Archia';
    src: url('${ArchiaMedium_woff2}') format('woff2'),
      url('${ArchiaMedium_woff}') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Archia';
    src: url('${ArchiaRegular_woff2}') format('woff2'),
      url('${ArchiaRegular_woff}') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Archia';
    src: url('${ArchiaLight_woff2}') format('woff2'),
      url('${ArchiaLight_woff}') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Archia';
    src: url('${ArchiaThin_woff2}') format('woff2'),
      url('${ArchiaThin_woff}') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
`;

export default fonts;
