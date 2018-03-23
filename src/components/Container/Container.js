import styled from 'styled-components';
import { rem } from 'polished';

import { SPACE } from 'config';

export default styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 70rem;
  padding: 0 ${rem(SPACE[7])};
  box-sizing: border-box;
`;
