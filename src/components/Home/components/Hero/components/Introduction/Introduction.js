import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';
import Buy from 'components/Buy';
import Heading from 'components/Heading';
import { Flex, Box } from 'grid-styled';

import { FONT_FAMILIES, COLOR, SPACE } from 'config';

const Paragraph = styled.p`
  font-size: 1.125em;
  color: #ffffff;
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 0.5em;
  text-transform: none;
`;

const Intro = styled.div`
  background-color: ${COLOR.dark};
  padding: ${SPACE[5]}px;
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
      <Box width={[1, 1, 1 / 3]} pl={[1, 0, 4]}>
        <Buy
          color="blue.5"
          bg="white"
          big
          fontSize={[1, 3]}
          width={[1, 1 / 2, 1]}
        >
          <FormattedMessage id="home.hero.buy" />
        </Buy>
        <Button
          to="downloads"
          color="blue.5"
          bg="white"
          big
          fontSize={[1, 3]}
          width={[1, 1 / 2, 1]}
        >
          <FormattedMessage id="home.hero.wallet.get" />
        </Button>
      </Box>
    </Flex>
);

export default Introduction;
