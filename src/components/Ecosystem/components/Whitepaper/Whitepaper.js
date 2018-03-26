import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Button from 'components/Button';
import media from 'utils/media';

import bg from './mail.svg';
import whitepaper from './skycoin_whitepaper.pdf';

const Wrapper = styled(Box)`
  overflow: hidden;
`;

const StyledBox = styled(Box)`
  position: relative;

  &::after {
    content: '';
    display: none;
    position: absolute;
    width: 100%;
    height: 410px;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    background: url(${bg}) 100% 50% no-repeat;
    background-size: contain;
    
    ${media.md.css`
      display: block;
    `}
  }
`;

const Whitepaper = () => (
  <Wrapper py={[6, 10, 13]}>
    <Container>
      <Flex>
        <StyledBox width={[1, 1, 3 / 5]} py={[0, 5, 13]}>
          <Heading heavy as="h2" my={[6, 8, 10]} fontSize={[6, 7]} width={[1, 2 / 3]}>
            <FormattedMessage id="ecosystem.whitepaper.heading" />
          </Heading>
          <Text fontSize={2} my={[4, 6]} color="black">
            <FormattedMessage id="ecosystem.whitepaper.body" />
          </Text>
          <Button
            href={whitepaper}
            download="skycoin_whitepaper.pdf"
            color="base"
            bg="white"
            pill
            outlined
            mt={[5, 6]}
          >
            <FormattedMessage id="ecosystem.whitepaper.download" />
          </Button>
        </StyledBox>
      </Flex>
    </Container>
  </Wrapper>
);

export default Whitepaper;
