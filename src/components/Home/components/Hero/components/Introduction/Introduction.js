import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';

import Button from 'components/Button';
import Buy from 'components/Buy';
import Heading from 'components/Heading';
import { Flex, Box } from 'grid-styled';

import { FONT_FAMILIES, COLOR, SPACE, FONT_SIZES } from 'config';

const Paragraph = styled.p`
  font-size: ${rem(FONT_SIZES[3])};
  color: ${COLOR.white};
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 0.5em;
  text-transform: none;
`;

const Intro = styled.div`
  background-color: ${COLOR.dark};
  padding: ${rem(SPACE[5])} ${rem(SPACE[7])} ${rem(SPACE[5])} ${rem(SPACE[4])};
  margin-left: -${rem(SPACE[4])};
`;

const Introduction = () => (
  <Flex wrap row pt={6}>
    <Box width={[1, 1, 2 / 3]} pr={[1, 0, 4]} mb={[8, 4, 4]}>
      <Intro>
        <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={7}>
          <FormattedMessage id="home.hero.heading" values={{ break: <br /> }} />
        </Heading>
        <Paragraph>
          <FormattedMessage id="home.hero.paragraph" />
        </Paragraph>
      </Intro>
    </Box>
    <Flex column align="center" width={[1, 1, 1 / 3]} pl={[1, 0, 4]} pt={4}>
      <Buy color="white" bg="base" big width={'200px'} pill >
        <FormattedMessage id="home.hero.buy" />
      </Buy>
      <Button to="downloads" color="base" bg="white" big width={'200px'} pill mt={5} >
        <FormattedMessage id="home.hero.wallet.get" />
      </Button>
    </Flex>
  </Flex>
);

export default Introduction;
