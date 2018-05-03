import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Text from 'components/Text';
import media from 'utils/media';
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
  background: ${props => (props.even ? COLOR.white : COLOR.paleGrey)};
  
  ${media.sm.css`
    padding-left: 0;
  `}
`;

const Feature = ({ name, even }) => (
  <FeatureWrapper p={7} mx={[-7, 0]} wrap align="center" even={even}>
    <Flex width={[1, 1 / 3]} justify="center" px={5}>
      <Icon src={images[name]} />
    </Flex>
    <Box width={[1, 2 / 3]}>
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
