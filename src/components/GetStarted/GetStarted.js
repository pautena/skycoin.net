import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Flex, Box } from 'grid-styled';

import { COLORS, FONT_FAMILIES } from 'config';
import Button from 'components/Button';
import Buy from 'components/Buy';
import Container from 'components/Container';
import Heading from 'components/Heading';
import media from 'utils/media';

const GetStarted = styled.div`
  background-color: ${COLORS.gray[1]};
  text-align: center;

  ${media.md.css`
    text-align: left;
  `}
`;

const Buttons = styled.div`
  ${media.md.css`
    text-align: right;
  `}
`;

const TextContainer = styled.div`
  color: #394049;
  font-family: ${FONT_FAMILIES.sans};
  font-size: 0.9375em;
  line-height: 1.75rem;
  margin-top: 1rem;
`;

export default () => (
  <GetStarted>
    <Container>
      <Flex align="center" py={[6, 6, 10]} wrap>
        <Box width={[1 / 1, 1 / 1, 1 / 2]}>
          <Heading heavy as="h2" fontSize={[4, 5, 6]} mb={[6, 6, 0]} color="black">
            <FormattedMessage id="getStarted.heading" />
          </Heading>
          <TextContainer>
            <FormattedHTMLMessage id="getStarted.paragraph" />
          </TextContainer>
        </Box>

        <Box width={[1 / 1, 1 / 1, 1 / 2]}>
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
        </Box>
      </Flex>
    </Container>
  </GetStarted>
);
