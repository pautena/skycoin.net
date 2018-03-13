import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Text from 'components/Text';

import { COLOR, FONT_FAMILIES, FONT_SIZES, SPACE } from 'config';
import { rem } from 'polished';

import * as images from './images';

const ecosystemItems = [
  'fiber',
  'obelisk',
  'skycoin',
  'coinHours',
  'coinJoin',
  'skyledger',
  'skywire',
  'skyminer',
  'nodes',
  'cx',
  'cxo',
  'kittyCash',
  'skyVpn',
  'skyMessenger',
  'bbs',
];

const Wrapper = styled(Box)`
  background: ${COLOR.dark};
`;

const Icon = styled.img.attrs({
  src: props => props.src,
})`
  display: block;
  max-width: 100%;
  height: auto;
  margin-right: ${rem(SPACE[5])};
`;

const InfoItem = ({ name }) => (
  <Flex width={[1, 1 / 2, 1 / 3]} px={[6, 6, 8]} mb={[6, 8]} align="flex-start">
    <Icon src={images[name]} />
    <div>
      <Heading heavy as="h4" mb={1} fontSize={4} color="white">
        <FormattedMessage id={`home.ecosystem.${name}.title`} />
      </Heading>
      <Text fontSize={2} color="white">
        <FormattedMessage id={`home.ecosystem.${name}.text`} />
      </Text>
    </div>
  </Flex>
);

const Press = () => (
  <Wrapper pt={[10, 13]} pb={[7, 8]}>
    <Container>
      <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6]} color="white" width={[1, 2 / 3]}>
        <FormattedMessage id="home.ecosystem.heading" />
      </Heading>
      <SubHeading fontSize={2} my={[4, 6]}>
        <FormattedMessage id="home.ecosystem.subheading" />
      </SubHeading>
      <Flex align="center" justify="space-between" wrap mt={12} mx={[-6, -6, -8]}>
        {ecosystemItems.map((item, i) => <InfoItem name={item} key={i} />)}
      </Flex>
    </Container>
  </Wrapper>
);

export default Press;
