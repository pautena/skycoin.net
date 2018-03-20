import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';

import { COLOR, FONT_FAMILIES, FONT_SIZES, SPACE } from 'config';
import { rem } from 'polished';
import media from 'utils/media';

import award from './images/award.svg';

/* eslint-disable global-require */
const logos = [
  require('./images/icBlockchain.png'),
  require('./images/icForbes.png'),
  require('./images/icCoinTelegrph.png'),
  require('./images/icCionAgenda.png'),
];
/* eslint-enable global-require */

const Section = styled.div`
  background: ${COLOR.lightGrey};
  padding-bottom: ${SPACE[13] + SPACE[4]}px;
  
  ${media.sm.css`
    padding-bottom: ${SPACE[13] + SPACE[6]}px;
  `}
`;

const Wrapper = styled(Box)`
  position: relative;
  background: ${COLOR.base};
  z-index: 1;
  margin: 0 -${rem(SPACE[7])} 0;
  
  ${media.sm.css`
    margin: -190px 0 0;
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

const Press = () => (
  <Section>
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
        <Flex align="center" justify="space-between" wrap my={[5, 8]} mx={-2} px={0}>
          {logos.map((item, i) => (
            <LogoWrapper width={[1 / 2, 1 / 4, 'auto']}>
              <Logo key={i} src={logos[i]} />
            </LogoWrapper>
          ))}
        </Flex>
      </Wrapper>
    </Container>
  </Section>
);

export default Press;
