import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Gallery from 'components/Gallery';
import Button from 'components/Button';
import Text from 'components/Text';

import miner1 from './miner1.png';
/* eslint-disable global-require */
const miners = [
  require('./miner2.png'),
  require('./miner3.png'),
  require('./miner4.png'),
  require('./miner5.png'),
];
/* eslint-enable global-require */

const StyledFlex = styled(Flex)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Miner = () => (
  <Box my={[8, 10, 13]}>
    <Container>
      <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6, 7]} color="black">
        <FormattedMessage id="home.miner.heading" />
      </Heading>
      <Text fontSize={2} color="black">
        <FormattedMessage id="home.miner.subheading" />
      </Text>

      <Box my={[7, 8, 10]}>
        <Gallery imgMain={miner1} imgList={miners} />
      </Box>

      <StyledFlex align="flex-end" column wrap my={8} pb={9}>
        <Button to="skyminer" color="base" pill outlined>
          <FormattedMessage id="home.miner.more" />
        </Button>
      </StyledFlex>

    </Container>
  </Box>
);

export default Miner;
