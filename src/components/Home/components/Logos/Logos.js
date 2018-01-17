import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { SPACE, COLORS } from 'config';
import Container from 'components/Container';
import media from 'utils/media';

import * as images from './images';

const Wrapper = styled.div`
  text-align: center;
  background-color: ${COLORS.gray[0]};
  border-top: 2px solid ${COLORS.gray[1]};
`;

const Logo = styled.img`
  padding: 0 1rem;
  vertical-align: middle;
  height: ${props => (props.square ? rem(50) : rem(35))};


  padding: ${rem(SPACE[4])} ${rem(SPACE[4])};

  ${media.md.css`
    height: ${props => (props.square ? rem(60) : rem(40))};
    padding: ${rem(SPACE[6])} ${rem(SPACE[4])};
  `}
`;

const LogoSmall = styled.img`
  padding: 0 1rem;
  vertical-align: middle;
  height: ${props => (props.square ? rem(25) : rem(25))};


  padding: ${rem(SPACE[4])} ${rem(SPACE[4])};

  ${media.md.css`
    height: ${props => (props.square ? rem(35) : rem(30))};
    padding: ${rem(SPACE[6])} ${rem(SPACE[4])};
  `}
`;

export default () => (
  <Wrapper>
    <Container>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alphabit.fund/"
      >
        <Logo src={images.alphabit} />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.forbes.com/sites/julesschroeder/2018/01/09/millennials-heres-how-cryptocurrency-could-transform-your-future/2/#7f061b5e1dc7"
      >
        <Logo src={images.forbes} />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.the-blockchain.com/2017/08/01/skycoin-launches-vision-new-internet/"
      >
        <Logo src={images.blockchainNews} square />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.huffingtonpost.com/entry/the-top-5-crypto-projects-to-watch-in-2018_us_5a4c6a77e4b06cd2bd03e359"
      >
        <LogoSmall src={images.huffingtonpost} />
      </a>
    </Container>
  </Wrapper>
);
