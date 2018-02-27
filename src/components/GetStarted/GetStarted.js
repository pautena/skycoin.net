import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Flex, Box } from 'grid-styled';

import { COLORS } from 'config';
import Button from 'components/Button';
import Buy from 'components/Buy';
import Container from 'components/Container';
import Heading from 'components/Heading';

const GetStarted = styled.div`
  background-color: ${COLORS.gray[1]};
  text-align: center;
`;

const Buttons = styled.div`
  margin: 0 auto;
`;

export default () => (
  <GetStarted>
    <Container>
      <Flex align="center" py={[6, 6, 10]} wrap>
        <Box width={[1 / 1, 1 / 1, 1 / 1]}>
          <Heading heavy as="h2" fontSize={[4, 5, 6]} mb={[6, 6, 7]} color="black">
            <FormattedMessage id="getStarted.heading" />
          </Heading>
        </Box>
        <Buttons>
          <Buy color="white" bg="blue.5" big fontSize={[1, 3]}>
            <FormattedMessage id="getStarted.buy" />
          </Buy>
          <Button
            outlined
            big
            to="downloads"
            color="blue.5"
            ml={[2, 5]}
            fontSize={[1, 3]}
          >
            <FormattedMessage id="getStarted.wallet" />
          </Button>
        </Buttons>
      </Flex>
    </Container>
  </GetStarted>
);
