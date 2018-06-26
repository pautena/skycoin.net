import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Button from 'components/Button';
import Link from 'components/Link';
import Text from 'components/Text';
import { COLOR } from 'config';

import obelisk from './obelisk.svg';

const Graphic = styled.img.attrs({
  src: obelisk,
})`
  max-width: 100%;
  display: block;
`;

const Wrapper = styled.div`
  background: ${COLOR.lightGrey};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default () => (
  <Wrapper>
    <Container>
      <Flex py={[7, 8]} align="center">
        <Box width={[1 / 1, 3 / 5]} mr={[4, 6]}>
          <StyledLink href="https://www.skycoin.net/blog/statement/obelisk-the-skycoin-consensus-algorithm/" target="_blank">
            <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6, 7]} color="black">
              <FormattedMessage id="home.network.heading" />
            </Heading>
            <SubHeading fontSize={2}>
              <FormattedMessage id="home.network.subheading" />
            </SubHeading>
          </StyledLink>
          <Text fontSize={2} mb={0} color="black">
            <FormattedHTMLMessage id="home.network.body" />
          </Text>
          <Flex mt={2} mb={[2, 4]} mx={-2} wrap>
            <Button
              href={'https://downloads.skycoin.net/whitepapers/Skycoin-Whitepaper-v1.0.pdf'}
              target="_blank"
              color="base"
              pill
              outlined
              m={2}
            >
              <FormattedMessage id="home.about.whitepaper" />
            </Button>
            <Button to="/obelisk" color="base" pill outlined m={2}>
              <FormattedMessage id="home.about.obelisk" />
            </Button>
          </Flex>
        </Box>

        <Box width={[0, 2 / 5]}>
          <Graphic />
        </Box>
      </Flex>
    </Container>
  </Wrapper>
);
