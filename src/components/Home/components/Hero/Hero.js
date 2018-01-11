import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Flag } from 'flag';

import { COLORS } from 'config';
import media from 'utils/media';
import Container from 'components/Container';
import Header from 'components/Header';
import Nav from './components/Nav';
import Map from './components/Map';
import Introduction from './components/Introduction';
import Announcement from './components/Announcement';

const Wrapper = styled.div`
  background-image: linear-gradient(-110deg, ${COLORS.base}, ${COLORS.blue[5]});
  position: relative;
  min-height: 33rem;
  height: auto;

  ${media.sm.css`
    height: 40rem;
  `}
`;

const StyledFlex = styled(Flex)`
  height: 100%;
  z-index: 1;
`;

const NavWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hero = () => (
  <Wrapper>
    <Map />

    <StyledFlex column justify="space-between">
      <Box>
        <Header white />
      </Box>
      <Box>
        <Container>
          <Flex row wrap align="center">
            <Box width={[1 / 1, 1 / 2]}>
              <Introduction />
            </Box>
            <NavWrapper width={[1 / 1, 1 / 2]}>
              <Nav />
            </NavWrapper>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Flag
          name="announcement"
          render={() => (
            <Announcement />
          )}
        />
      </Box>
    </StyledFlex>
  </Wrapper>
);

export default Hero;
