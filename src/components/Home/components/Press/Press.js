import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Link from 'components/Link';

import { COLOR, FONT_FAMILIES, FONT_SIZES, SPACE } from 'config';
import { rem } from 'polished';
import media from 'utils/media';
import * as logos from './images';

const forbes = logos.forbes;
const huffingtonPost = logos.huffingtonPost;

const partners = [
  { image: logos.blockchain, url: '' },
  { image: logos.coinTelegraph, url: '' },
  { image: logos.coinAgenda, url: '' },
  { image: logos.nasdaq, url: 'https://twitter.com/Nasdaq/status/996785167527235584' },
  { image: logos.alphabit, url: '' },
  { image: logos.cnbc, url: '' },
  { image: logos.inc, url: '' },
];

const Wrapper = styled(Box)`
  position: relative;
  background: ${COLOR.base};
  z-index: 1;
  margin: 0 -${rem(SPACE[7])} 0;
  
  ${media.sm.css`
    margin: -233px 0 0;
  `}
`;

const Logos = styled(Flex)`
  border-top: 1px solid rgba(255, 255, 255, 0.25);
`;

const LogoWrapper = styled(Box)`
  flex-wrap: wrap;
  text-align: center;
  padding: ${rem(SPACE[2])};

  ${media.md.css`
    padding: ${rem(SPACE[2])} ${rem(SPACE[6])};
  `};
`;

const Logo = styled.img.attrs({
  src: props => props.src,
})`
  display: inline-block;
  margin-top: ${rem(SPACE[4])};
  margin-bottom: ${rem(SPACE[4])};
  max-width: 100%;
  max-height: 94px;
  
`;

const Quote = styled.blockquote`
  position: relative;
  font-size: ${rem(FONT_SIZES[2])};
  color: ${COLOR.white};
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 0.5em;
  padding-top: 0.5rem;
  padding-left: 2rem;
  padding-right: 3rem;
  text-transform: none;
  
  a, a:visited, a:focus, a:hover, a:active {
    color: ${COLOR.white};
    text-decoration: none;
  }
  
  &:before {
    content: '\\201c';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 5rem;
    line-height: 5rem;
  }
`;

const Press = () => (
  <div>
    <Container>
      <Wrapper py={[6, 8, 10]} px={[7, 10, 12]}>
        <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6, 7]} color="white">
          <FormattedMessage id="home.press.heading" />
          <p>
            <FormattedMessage as="p" id="home.press.subheading" />
          </p>
        </Heading>
        <Flex wrap align="flex-start">
          <Box width={[1, 1, 1 / 2]}>
            <Quote>
              <Link href="http://forbes.com/sites/andrewrossow/2018/10/04/trick-or-treat-13-blockchain-companies-by-industry-that-will-have-your-cauldrons-bubbling-for-2019/" target="_blank">
                <p>
                  <FormattedMessage id="home.press.forbes" />
                </p>
                <Logo src={forbes} />
              </Link>
            </Quote>
          </Box>
          <Flex row align="center" justify="flex-end" width={[1, 1, 1 / 2]}>
            <Quote>
              <Link href="https://www.huffingtonpost.com/entry/the-top-5-crypto-projects-to-watch-in-2018_us_5a4c6a77e4b06cd2bd03e359" target="_blank">
                <p>
                  <FormattedMessage id="home.press.huffingtonPost" />
                </p>
                <Logo src={huffingtonPost} />
              </Link>
            </Quote>
          </Flex>
        </Flex>

        <Logos align="center" wrap mt={[5, 7]} pt={[3, 5]} mb={3} mx={-2} px={0}>
          {partners.map((item, i) => (
            <LogoWrapper width={[1 / 4, 1 / 4, 1 / 7]}>
              <Link href={item.url} target="_blank">
                <Logo key={i} src={item.image} />
              </Link>
            </LogoWrapper>
          ))}
        </Logos>
      </Wrapper>
    </Container>
  </div>
);

export default Press;
