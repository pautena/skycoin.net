import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Flex } from 'grid-styled';

import { COLORS } from 'config';
import Button from 'components/Button';
import Buy from 'components/Buy';
import Container from 'components/Container';
import media from 'utils/media';

const GetStarted = styled.div`
  background-color: ${COLORS.gray[1]};
  text-align: center;

  ${media.md.css`
    text-align: left;
  `}
`;

const Buttons = styled.div`
  margin: 0 auto;
`;

export default () => (
  <GetStarted>
    <Container>
      <Flex align="center" py={[6, 6, 10]} wrap>
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
