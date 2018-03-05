import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { SPACE, COLORS, FONT_FAMILIES } from 'config';
import Container from 'components/Container';
import media from 'utils/media';

import * as images from './images';

const Wrapper = styled.div`
  text-align: center;
  background-color: ${COLORS.gray[0]};
  border-top: 2px solid ${COLORS.gray[1]};
  padding: 2em 0;
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

const Paragraph = styled.p`
  font-size: 17px;
  margin-bottom: 0px;
  font-family: "SkycoinSans", sans-serif;
  line-height: 1.5rem;
  padding: 1em 0;
  -webkit-text-transform: none;
  text-transform: none;
`;

const StyledLink = styled.a`
  color: #394049;
  font-family: ${FONT_FAMILIES.sansBold};
`;

export default () => (
  <Wrapper>
    <Paragraph>
      <StyledLink href="https://www.huffingtonpost.com/entry/the-top-5-crypto-projects-to-watch-in-2018_us_5a4c6a77e4b06cd2bd03e359" target="_blank" rel="noopener noreferrer">
        {'"Top 5 Crypto Projects to Watch in 2018" Karl Kangur - CEO of Result Compass'}
      </StyledLink>
    </Paragraph>
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
    </Container>
  </Wrapper>
);
