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

const Buttons = styled(Flex)`
  margin: 0 auto;
  
  & > div {
    display: inline-block;
    width: auto;
  }
`;

export default () => (
  <GetStarted>
    <Container>
      <Flex align="center" py={[6, 6, 10]} wrap>
        <Box width={[1 / 1, 1 / 1, 1 / 1]}>
          <Heading heavy as="h2" fontSize={[4, 5, 6]} mb={[6, 6, 7]} color="white">
            <FormattedMessage id="getStarted.heading" />
          </Heading>
        </Box>
        <Buttons wrap justify="center">
          <Buy
            big
            to="buy"
            color="base"
            fontSize={[1, 3]}
            bg="white"
            width={'200px'}
            mx={[1, 2]}
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
            fontSize={[1, 3]}
            bg="rgba(0,0,0,0)"
            width={'200px'}
            mx={[1, 2]}
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
