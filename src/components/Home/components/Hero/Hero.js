import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
<<<<<<< HEAD

import { COLOR, SPACE } from 'config';
import media from 'utils/media';
import Container from 'components/Container';
import CanvasBg from './components/CanvasBg';
=======
import { Flag } from 'flag';

import { COLORS } from 'config';
import media from 'utils/media';
import Container from 'components/Container';
import Header from 'components/Header';
import Map from './components/Map';
>>>>>>> master
import Introduction from './components/Introduction';
import Announcement from './components/Announcement';

const Wrapper = styled.div`
<<<<<<< HEAD
  background: ${COLOR.dark};
  position: relative;
  height: auto;
  overflow: hidden;
  padding-bottom: ${SPACE[8]}px;

  ${media.sm.css`
    min-height: 56rem;
=======
  background-image: linear-gradient(-110deg, ${COLORS.base}, ${COLORS.blue[5]});
  position: relative;
  min-height: 33rem;
  height: auto;

  ${media.sm.css`
    height: 40rem;
>>>>>>> master
  `}
`;

const StyledFlex = styled(Flex)`
<<<<<<< HEAD
  position: relative;
=======
>>>>>>> master
  height: 100%;
  z-index: 1;
`;

const Hero = () => (
  <Wrapper>
<<<<<<< HEAD
    <CanvasBg />
    <StyledFlex column justify="flex-start">
      <Box mt={[0, 8, 8]} pb={[8, 8, 0]}>
=======
    <Map />

    <StyledFlex column justify="space-between">
      <Box>
        <Header white />
      </Box>
      <Box>
>>>>>>> master
        <Container>
          <Flex row wrap align="center">
            <Box width={[1 / 1]}>
              <Introduction />
            </Box>
          </Flex>
        </Container>
      </Box>
<<<<<<< HEAD
=======

      <Box>
        <Flag
          name="announcement"
          render={() => (
            <Announcement />
          )}
        />
      </Box>
>>>>>>> master
    </StyledFlex>
  </Wrapper>
);

export default Hero;
