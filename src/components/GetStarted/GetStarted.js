import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Flex, Box } from 'grid-styled';

import Button from 'components/Button';
import Buy from 'components/Buy';
import Container from 'components/Container';
import Heading from 'components/Heading';

import bg from './bg-get-started.png';

const GetStarted = styled.div`
  background: url(${bg});
  background-size: cover;
  text-align: center;
`;

const Buttons = styled.div`
  margin: 0 auto;
`;

<Flex column align="center" width={[1, 1, 1 / 3]} pl={[1, 0, 4]} pt={4}>
  <Buy color="white" bg="base" big width={'200px'} pill >
    <FormattedMessage id="home.hero.buy" />
  </Buy>
</Flex>

export default () => (
  <GetStarted>
    <Container>
      <Flex align="center" py={[6, 6, 10]} wrap>
        <Box width={[1 / 1, 1 / 1, 1 / 1]}>
          <Heading heavy as="h2" fontSize={[4, 5, 6]} mb={[6, 6, 7]} color="white">
            <FormattedMessage id="getStarted.heading" />
          </Heading>
        </Box>
        <Buttons>
          <Buy
            big
            to="downloads"
            color="base"
            ml={[2, 5]}
            fontSize={[1, 3]}
            bg="white"
            width={'200px'}
            pill
            mt={5}
          >
            <FormattedMessage id="getStarted.buy" />
          </Buy>
          <Button
            big
            outlined
            to="downloads"
            color="white"
            ml={[2, 5]}
            fontSize={[1, 3]}
            bg="rgba(0,0,0,0)"
            width={'200px'}
            pill
            mt={5}
          >
            <FormattedMessage id="getStarted.wallet" />
          </Button>
        </Buttons>
      </Flex>
    </Container>
  </GetStarted>
);
