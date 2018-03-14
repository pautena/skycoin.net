import React from 'react';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';
import styled from 'styled-components';

import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import ApplicationTable from 'components/ApplicationTable';

import { downloads, version } from './downloads';

const SubheadingSeparator = styled.div`
  width: 20px;
  height: 1px;
  background-color: #92A4BA;
  margin-right: 12px;
  display: inline-block;
`;

const Wallet = () => (
  <div>
    <Container>
      <Box width={[1 / 1, 1 / 1, 2 / 3]} my={[5, 7]}>
        <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[1, 2]}>
          <FormattedMessage id="downloads.wallet.heading" />
        </Heading>

        <SubHeading fontSize={[1, 1, 2]} color="gray.9" normal>
          <SubheadingSeparator />
          <FormattedMessage id="downloads.wallet.build" values={{ version }} />
        </SubHeading>
      </Box>
      <ApplicationTable list={downloads} />
    </Container>
  </div>
);

export default Wallet;
