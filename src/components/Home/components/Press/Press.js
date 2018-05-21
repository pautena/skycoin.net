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

import award from './images/award.svg';
import * as logos from './images';

const partners = [
  { image: logos.blockchain, url: '' },
  { image: logos.alphabit, url: '' },
  { image: logos.coinTelegraph, url: '' },
  { image: logos.nasdaq, url: 'https://twitter.com/Nasdaq/status/996785167527235584' },
  { image: logos.forbes, url: 'https://www.forbes.com/sites/julesschroeder/2018/01/09/millennials-heres-how-cryptocurrency-could-transform-your-future/' },
  { image: logos.coinAgenda, url: '' },
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

const LogoWrapper = styled(Box)`
  text-align: center;
  padding: ${rem(SPACE[2])};
  
  ${media.sm.css`
    &:first-child {
      text-align: left;
    }
    
    &:last-child {
      text-align: right;
    }
  `}
`;


const Logo = styled.img.attrs({
  src: props => props.src,
})`
  display: inline-block;
  margin-top: ${rem(SPACE[4])}px;
  margin-bottom: ${rem(SPACE[4])}px;
  max-width: 100%;
  max-height: 94px;
  
`;

const Paragraph = styled.p`
  font-size: ${rem(FONT_SIZES[2])};
  color: ${COLOR.white};
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 0.5em;
  margin-right: ${SPACE[13]};
  text-transform: none;
`;

const Graphic = styled.img.attrs({
  src: award,
})`
  display: block;
  max-width: 100%;
  max-height: 155px;
  margin-right: ${rem(SPACE[8])}px;
`;

const LogosWrapper = styled(Flex)`
  flex-wrap: wrap;
  
  ${media.md.css`
    flex-wrap: nowrap;  
  `}
`;

const Press = () => (
  <div>
    <Container>
      <Wrapper py={[6, 8, 10]} px={[7, 10, 12]}>
        <Flex wrap>
          <Box width={[1, 4 / 5]}>
            <Heading heavy as="h2" my={[4, 6]} mr={[13]} fontSize={[5, 6, 7]} color="white">
              <FormattedMessage id="home.press.heading" />
            </Heading>
            <Paragraph>
              <FormattedMessage id="home.press.body" />
            </Paragraph>
          </Box>
          <Flex row align="center" justify="flex-end" width={[0, 1 / 5]}>
            <Graphic />
          </Flex>
        </Flex>
        <LogosWrapper align="center" justify="space-between" wrap my={[5, 8]} mx={-2} px={0}>
          {partners.map((item, i) => (
            <LogoWrapper width={[1 / 2, 1 / 3, 'auto']}>
              <Link href={item.url} target="_blank">
                <Logo key={i} src={item.image} />
              </Link>
            </LogoWrapper>
          ))}
        </LogosWrapper>
      </Wrapper>
    </Container>
  </div>
);

export default Press;
