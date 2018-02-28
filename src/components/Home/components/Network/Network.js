import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { Flag } from 'flag';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Link from 'components/Link';
import Text from 'components/Text';
import Button from 'components/Button';

import obelisk from './obelisk.jpg';

const Graphic = styled.img.attrs({
  src: obelisk,
})`
  max-width: 100%;
  display: block;
`;

const Strong = styled.strong`
  display: inline-block;
  font-family: SkycoinSansBold;
  margin-right: 0.5ch;
`;

export default () => (
  <div>
    <Container>
      <Flex py={[7, 8]} align="center">
        <Box width={[1 / 1, 2 / 3]}>
          <Link href="https://www.skycoin.net/blog/statement/obelisk-the-skycoin-consensus-algorithm/" target="_blank">
            <Heading heavy as="h2" my={[4, 5]} fontSize={[5, 6]} color="black">
              <FormattedMessage id="home.network.heading" />
            </Heading>
          </Link>
          <Text fontSize={[3, 3, 4]} mb={0} color="black" heavy>
            <Strong><FormattedMessage id="home.network.emphasis" /></Strong>
            <FormattedMessage id="home.network.body" />
          </Text>
          <Button mt={4} to="/whitepapers" color="white" bg="base" big fontSize={[1, 3]}>
            <FormattedMessage id="home.about.whitepaper" />
          </Button>

          <Flag
            name="network"
            render={() => (
              <Text fontSize={[3, 3, 4]} mb={0} heavy color="base">
                <Link href="infographics.html">
                  <FormattedMessage id="home.network.link" />
                </Link>
              </Text>
            )}
          />
        </Box>

        <Box width={[0, 1 / 3]} ml={[0, 4]}>
          <Graphic />
        </Box>
      </Flex>
    </Container>
  </div>
);
