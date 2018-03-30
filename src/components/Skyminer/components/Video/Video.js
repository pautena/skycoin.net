import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import Container from 'components/Container';
import Heading from 'components/Heading';

import { COLOR } from 'config';

const Wrapper = styled(Box)`
  background: ${COLOR.lightBlue};
`;

const Video = () => (
  <Wrapper py={[6, 10, 13]}>
    <Container>
      <Heading heavy as="h2" fontSize={[6, 7]} color="black">
        <FormattedMessage id="skyminer.about.heading" />
      </Heading>
    </Container>
  </Wrapper>
);

export default Video;
