import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import Container from 'components/Container';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Button from 'components/Button';
import media from 'utils/media';
import { COLOR } from 'config';
import Animation from './components/Animation';

const Wrapper = styled(Flex)`
  position: relative;
  height: auto;
  box-sizing: border-box;
  background: ${COLOR.dark};
  background-size: cover;
  overflow: hidden;

  ${media.sm.css`
    min-height: 100vh;
  `}
`;

const Intro = styled(Flex)`
  position: relative;
  flex-grow: 1;
  z-index: 1;
`;

const IntroContent = styled.div`
  ${media.sm.css`
    max-width: 25rem;
  `}
`;

const MinerHero = () => (
  <Wrapper pb={[8, 12]} column>
    <Animation />
    <Header white social showBuy={false} />
    <Intro align="center">
      <Container>
        <IntroContent>
          <Heading heavy as="h1" fontSize={[7, 9]} color="white">
            <FormattedMessage id="skyminer.hero.heading" />
          </Heading>

          <Button to="downloads" color="white" bg="base" xxl width={['100%', '260px']} pill mt={5} >
            <FormattedMessage id="skyminer.hero.button" />
          </Button>
        </IntroContent>
      </Container>
    </Intro>
  </Wrapper>
);

export default MinerHero;
