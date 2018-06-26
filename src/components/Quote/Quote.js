import styled from 'styled-components';
import Text from 'components/Text';
import { rem } from 'polished';

import { COLOR, SPACE } from 'config';

const Quote = styled(Text)`
  padding: ${rem(SPACE[3])} 0 ${rem(SPACE[3])} ${rem(SPACE[7])};
  border-left: 3px solid ${COLOR.textGrey};
  
  a {
    color: ${COLOR.base};
  }
`;

export default Quote;
