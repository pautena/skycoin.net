import { rem } from 'polished';
import styled from 'styled-components';
import { SPACE } from 'config';
import media from 'utils/media';

const Banner = styled.img`
  width: 100%;
  margin-bottom: ${rem(SPACE[8])};
  
  ${media.sm.css`
    margin-bottom: ${rem(SPACE[10])};    
  `}
`;

export default Banner;
