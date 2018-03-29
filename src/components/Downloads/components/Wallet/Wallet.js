import React from 'react';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import ApplicationTable from 'components/ApplicationTable';
import { COLOR } from 'config';

import { downloads, version } from './downloads';

const Wallet = () => (
  <div>
    <Container>
      <Box width={[1 / 1, 1 / 1, 2 / 3]} my={[5, 7]}>
        <Heading heavy as="h2" fontSize={[6, 7]} color={COLOR.textDark} mb={2}>
          <FormattedMessage id="downloads.wallet.heading" />
        </Heading>

        <SubHeading fontSize={[1, 1, 2]} normal mb={[8, 10]}>
          <FormattedMessage id="downloads.wallet.build" values={{ version }} />
        </SubHeading>
      </Box>
      <ApplicationTable list={downloads} />
    </Container>
  </div>
);

export default Wallet;
