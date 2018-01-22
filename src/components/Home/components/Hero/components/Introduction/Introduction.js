import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';
import Buy from 'components/Buy';
import Heading from 'components/Heading';
import { Flex, Box } from 'grid-styled';
import List from '../List';


const Introduction = () => (
  <div>
    <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={7}>
      <FormattedMessage id="home.hero.heading" values={{ break: <br /> }} />
    </Heading>
    <List content={[
      'home.hero.list.0',
      'home.hero.list.1',
      'home.hero.list.2',
      'home.hero.list.3',
      'home.hero.list.4',
    ]}
    />
    <Flex wrap row mb={4}>

      <Box width={[1 / 2, 1, 1 / 2]} pr={[1, 0, 4]} mb={[0, 4, 0]}>
        <Buy
          color="blue.5"
          bg="white"
          big
          fontSize={[1, 3]}
          width={[1, 1 / 2, 1]}
        >
          <FormattedMessage id="home.hero.buy" />
        </Buy>
      </Box>
      <Box width={[1 / 2, 1, 1 / 2]} pl={[1, 0, 4]}>
        <Button
          to="downloads"
          color="white"
          big
          outlined
          width={[1, 1 / 2, 1]}
          fontSize={[1, 3]}
        >
          <FormattedMessage id="home.hero.wallet.get" />
        </Button>
      </Box>
    </Flex>

    <Flex wrap mb={[6, 0]}>
      <Box width={[1 / 2, 1, 1 / 2]} pr={[1, 0, 4]} mb={[0, 4, 0]}>
        <Button
          href="https://www.skycoin.net/blog/statement/skycoin-community-links/"
          color="white"
          big
          outlined
          width={[1, 1 / 2, 1]}
          fontSize={[1, 3]}
        >
          <FormattedMessage id="home.hero.community" />
        </Button>
      </Box>
      <Box width={[1 / 2, 1, 1 / 2]} pl={[1, 0, 4]}>
        <Button
          to="whitepapers"
          color="blue.5"
          bg="white"
          big
          width={[1, 1 / 2, 1]}
          fontSize={[1, 3]}
        >
          <FormattedMessage id="home.hero.whitepapers" />
        </Button>
      </Box>
    </Flex>
  </div>
);

export default Introduction;
