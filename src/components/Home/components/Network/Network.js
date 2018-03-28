import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
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

<<<<<<< HEAD
const Wrapper = styled.div`
  background: ${COLOR.lightGrey};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
=======
const Strong = styled.strong`
  display: inline-block;
  font-family: SkycoinSansBold;
  margin-right: 0.5ch;
>>>>>>> master
`;

export default () => (
  <Wrapper>
    <Container>
      <Flex py={[7, 8]} align="center">
<<<<<<< HEAD
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
=======
        <Box width={[1 / 1, 2 / 3]}>
          <Link href="https://www.skycoin.net/blog/statement/obelisk-the-skycoin-consensus-algorithm/" target="_blank">
            <Heading heavy as="h2" my={[4, 5]} fontSize={[5, 6]} color="black">
              <FormattedMessage id="home.network.heading" />
            </Heading>
          </Link>
          <Text fontSize={[3, 3, 4]} mb={0} color="black" heavy>
            <Strong><FormattedMessage id="home.network.emphasis" /></Strong>
>>>>>>> master
            <FormattedMessage id="home.network.body" />
          </Text>
          <Text mt={4} color="base" big fontSize={2}>
            <StyledLink to="/whitepapers">
              <FormattedMessage id="home.about.whitepaper" />
            </StyledLink>
          </Text>
        </Box>

        <Box width={[0, 2 / 5]}>
          <Graphic />
        </Box>
      </Flex>
    </Container>
  </Wrapper>
);
