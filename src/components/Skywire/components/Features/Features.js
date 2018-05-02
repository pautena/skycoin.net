import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Text from 'components/Text';

import { COLOR } from 'config';
import * as images from './images';

const featureItems = [
  'speed',
  'privacy',
  'security',
  'ecosystem',
  'internet',
];

const Icon = styled.img.attrs({
  src: props => props.src,
})`
  display: block;
  max-width: 100%;
  height: auto;
  margin: auto;
`;

const FeatureWrapper = styled(Flex)`
  padding-left: 0;
  background: ${props => (props.even ? COLOR.white : COLOR.paleGrey)};
`;

const Feature = ({ name, even }) => (
  <FeatureWrapper width={1} p={[6, 6, 8]} align="stretch" even={even}>
    <Flex width={[1 / 3]}>
      <Icon src={images[name]} />
    </Flex>
    <Box width={[2 / 3]}>
      <SubHeading heavy as="h4" mb={4} fontSize={3} color="black">
        <FormattedMessage id={`skywire.features.${name}.title`} />
      </SubHeading>
      <Text fontSize={2} color="black" m={0}>
        <FormattedMessage id={`skywire.features.${name}.text`} />
      </Text>
    </Box>
  </FeatureWrapper>
);


Feature.propTypes = {
  name: PropTypes.string.isRequired,
  even: PropTypes.bool.isRequired,
};

const Features = () => (
  <Box py={[8, 10, 13]}>
    <Container>
      <Heading heavy as="h2" mb={2} fontSize={[6, 7]} color={COLOR.textDark}>
        <FormattedMessage id="skywire.features.heading" />
      </Heading>
      {featureItems.map((item, i) => <Feature name={item} even={i % 2 === 0} key={i} />)}
    </Container>
  </Box>
);

export default Features;
