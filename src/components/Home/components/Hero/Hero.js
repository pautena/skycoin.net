import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rgba } from 'polished';

import { COLOR, SPACE } from 'config';
import media from 'utils/media';
import Container from 'components/Container';
import CanvasBg from './components/CanvasBg';
import Introduction from './components/Introduction';

const Wrapper = styled.div`
  background: ${COLOR.dark};
  position: relative;
  height: auto;
  overflow: hidden;
  padding-bottom: ${SPACE[8]}px;

  ${media.sm.css`
    min-height: 56rem;
  `}
`;

const StyledFlex = styled(Flex)`
  position: relative;
  height: 100%;
  z-index: 1;
`;

const Hero = () => (
  <Wrapper>
    <CanvasBg />
    <StyledFlex column justify="flex-start">
      <Box mt={[0, 8, 8]} pb={[8, 8, 0]}>
        <Container>
          <Flex row wrap align="center">
            <Box width={[1 / 1]}>
              <Introduction />
            </Box>
          </Flex>
        </Container>
      </Box>
    </StyledFlex>
  </Wrapper>
);

export default Hero;
