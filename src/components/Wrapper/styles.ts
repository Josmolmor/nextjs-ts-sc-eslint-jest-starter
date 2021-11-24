import styled from 'styled-components';
import { from } from 'styles/responsive';

const MaxWidth = styled.div`
  max-width: 75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: content-box;
  width: 100%;

  ${from.tablet} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export default MaxWidth;
