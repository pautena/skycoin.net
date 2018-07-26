import React from 'react';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Gallery from './components/Gallery';
import * as img from './images';

const images = [
  img.wallet1,
  img.wallet2,
  img.wallet3,
  img.wallet4,
  img.wallet5,
  img.wallet6,
];

const Wallet = () => (
  <Box my={[8, 10, 13]}>
    <Container>

      <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6, 7]} color="black">
        <FormattedMessage id="home.miner.headingHardware" />
      </Heading>

      <Box my={[7, 8, 10]}>
        <Gallery imgList={images} />
      </Box>

    </Container>
  </Box>
);

export default Wallet;
