import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import Container from 'components/Container';
import Navigation from 'components/Navigation';
import Text from 'components/Text';
import Logo from 'components/Logo';
import { COLOR } from 'config';

import Languages from './components/Languages';
import Email from './components/Email';

const COPYRIGHT = '© Skycoin.net 2018';

const Wrapper = styled.div`
  background: ${COLOR.dark};
`;

export default () => (
  <Wrapper>
    <Container>
      <Flex align="center" justify="space-between" wrap py={[4, 8]} mx={-4}>
        <Logo blueWhite />
        <Navigation white />
      </Flex>


      <Flex>
        <Box width={[1, 1 / 3]}>
          <Text fontSize={[1, 1, 2]} color="gray.8" mt={2}>{COPYRIGHT}</Text>
        </Box>
        <Box width={[1, 1 / 3]}>
          <Text fontSize={[1, 1, 2]} color="gray.8" mt={2} textAlign="center">
            <Email />
          </Text>
        </Box>
        <Box width={[1, 1 / 3]}>
          <Text as="div" fontSize={[0, 0, 1]} color="gray.8" heavy mt={2}>
            <Languages />
          </Text>
        </Box>
      </Flex>
    </Container>
  </Wrapper>
);
