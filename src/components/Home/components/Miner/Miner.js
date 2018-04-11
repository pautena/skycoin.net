import React from 'react';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Gallery from 'components/Gallery';
// import Button from 'components/Button';
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

const Miner = () => (
  <Box my={13}>
    <Container>
      <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6, 7]} color="black">
        <FormattedMessage id="home.miner.heading" />
      </Heading>
      <Text fontSize={2} color="black">
        <FormattedMessage id="home.miner.subheading" />
      </Text>

      {/* <Flex align="flex-end" column wrap mt={[7, 8, 10]}>
        <Button to="skyminer" color="base" pill outlined>
          <FormattedMessage id="home.miner.more" />
        </Button>
      </Flex> */}

      <Box my={[7, 8, 10]}>
        <Gallery imgMain={miner1} imgList={miners} />
      </Box>

      {/* <Flex align="flex-end" column wrap> */}
      {/* <Button to="/" color="white" bg="base" big width={'200px'} pill > */}
      {/* <FormattedMessage id="home.miner.link" /> */}
      {/* </Button> */}
      {/* </Flex> */}
    </Container>
  </Box>
);

export default Miner;
