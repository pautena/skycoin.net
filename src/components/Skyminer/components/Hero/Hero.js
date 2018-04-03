import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import Container from 'components/Container';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Button from 'components/Button';
import media from 'utils/media';

import bg from './bg.png';

const Wrapper = styled(Flex)`
  position: relative;
  height: auto;
  box-sizing: border-box;
  background: url(${bg}) center center no-repeat;
  background-size: cover;
  overflow: hidden;

  ${media.sm.css`
    min-height: 100vh;
  `}
`;

const Intro = styled(Flex)`
  flex-grow: 1;
`;

const MinerHero = () => (
  <Wrapper pb={[8, 12]} column>
    <Header white social socialWhite showNav={false} showBuy={false} />
    <Intro align="center">
      <Container>
        <Heading heavy as="h1" fontSize={[7, 9]} color="white">
          <FormattedHTMLMessage id="skyminer.hero.heading" />
        </Heading>

        <Button to="downloads" color="white" bg="base" xxl width={['100%', '260px']} pill mt={5} >
          <FormattedMessage id="skyminer.hero.button" />
        </Button>
      </Container>
    </Intro>
  </Wrapper>
);

export default MinerHero;
