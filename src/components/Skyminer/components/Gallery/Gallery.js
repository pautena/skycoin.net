import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box } from 'grid-styled';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Gallery from 'components/Gallery';

import miner from './1.png';
import minerReverse from './8.png';
/* eslint-disable global-require */
const minersList = [
  require('./2.png'),
  require('./3.png'),
  require('./4.png'),
  require('./5.png'),
];
const minersListReverse = [
  require('./7.png'),
  require('./6.png'),
  require('./10.png'),
  require('./9.png'),
];
/* eslint-enable global-require */

const MinerGallery = () => (
  <Box py={[6, 10, 13]}>
    <Container>
      <Heading heavy as="h2" fontSize={[7, 9]} color="black">
        <FormattedMessage id="skyminer.gallery.heading" />
      </Heading>
      <Box my={[7, 8, 10]}>
        <Gallery imgMain={miner} imgList={minersList} />
        <Gallery imgMain={minerReverse} imgList={minersListReverse} reverse />
      </Box>
    </Container>
  </Box>
);

export default MinerGallery;
