import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';

import { COLOR, FONT_FAMILIES, FONT_SIZES, SPACE } from 'config';
import { rem } from 'polished';

import award from './images/award.png';

/* eslint-disable global-require */
const logos = [
  require('./images/logo-blockchain.png'),
  require('./images/logo-forbes.png'),
  require('./images/logo-cointelegraph.png'),
  require('./images/logo-coinagenda.png'),
];
/* eslint-enable global-require */

const Section = styled.div`
  background: ${COLOR.lightGrey};
`;

const Wrapper = styled(Box)`
  position: relative;
  background: ${COLOR.base};
  transform: translateY(-40%);
  z-index: 1;
`;

const Logo = styled.img.attrs({
  src: props => props.src,
})`
  display: block;
`;

const Paragraph = styled.p`
  font-size: ${rem(FONT_SIZES[2])};
  color: ${COLOR.white};
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 0.5em;
  text-transform: none;
`;

const Graphic = styled.img.attrs({
  src: award,
})`
  display: block;
  max-width: 100%;
  max-height: 155px;
  margin-right: ${rem(SPACE[6])};
`;

const Press = () => (
  <Section>
    <Container>
      <Wrapper py={[5, 7, 9]} px={[4, 6, 8]}>
        <Flex>
          <Box width={[4 / 5]}>
            <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6]} color="white">
              <FormattedMessage id="home.press.heading" />
            </Heading>
            <Paragraph>
              <FormattedMessage id="home.press.body" />
            </Paragraph>
          </Box>
          <Flex row align="center" justify="flex-end" width={[1 / 5]}>
            <Graphic />
          </Flex>
        </Flex>
        <Flex align="center" justify="space-between" wrap my={10}>
          {logos.map((item, i) => <Logo key={i} src={logos[i]} />)}
        </Flex>
      </Wrapper>
    </Container>
  </Section>
);

export default Press;
