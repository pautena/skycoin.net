import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Label from 'components/Label';
import Link from 'components/Link';

import miner from './miner.png';
import background from './background.png';

// TODO: update gradient to use global colors
const Wrapper = styled.div`
  background:
    url(${background}) center center / cover,
    linear-gradient(-155deg, #686e96 0%, #373b5c 100%);
`;

const Graphic = styled.img.attrs({
  src: miner,
})`
  display: block;
  max-width: 100%;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #fff;
  margin: 1em 0 0;

  &:hover {
    text-decoration: underline;
  }
`;

const Miner = () => (
  <Wrapper>
    <Container>
      <Flex py={[7, 8]} align="center">
        <Box width={[1 / 3, 1 / 4]} mr={[4, 6]}>
          <StyledLink href="https://www.skycoin.net/blog/statement/skywire-miner-hardware-for-the-next-internet/">
            <Graphic />
          </StyledLink>
        </Box>

        <Box width={[2 / 3, 3 / 4]}>
          <Heading heavy as="h2" mt={[4, 5]} mb={0} fontSize={[5, 6]} color="white">
            <FormattedMessage id="home.miner.heading" />
          </Heading>
          <Heading heavy as="div" mt={5} mb={0} fontSize={[3]} color="white">
            <FormattedMessage id="home.miner.subscribe" />
          </Heading>
          <StyledLink href="https://www.skycoin.net/blog/statement/skywire-miner-hardware-for-the-next-internet/">
            <Label>
              <FormattedMessage id="home.miner.label" />
            </Label>
          </StyledLink>
          <StyledLink to="mailing-list">
            <Label>
              <FormattedMessage id="home.miner.mailingList" />
            </Label>
          </StyledLink>
        </Box>
      </Flex>
    </Container>
  </Wrapper>
);

export default Miner;
