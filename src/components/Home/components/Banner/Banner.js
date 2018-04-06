import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Text from 'components/Text';
import Button from 'components/Button';

import { COLOR } from 'config';

const Wrapper = styled(Box)`
  background: ${COLOR.base};
  text-align: center;
`;

const StyledText = styled(Text)`
  display: inline-block;
`;

const Banner = () => (
  <Wrapper py={1}>
    <Container>
      <StyledText color="white" my={2} mx={2}>
        <FormattedMessage id="home.banner.heading" />
      </StyledText>
      <Button target="_blank" href="https://www.skycoin.net/blog/statement/shanghai-event-announcement/" pill bg="white" color="base" my={2} mx={2}>
        <FormattedMessage id="home.banner.button" />
      </Button>
    </Container>
  </Wrapper>
);

export default Banner;
