import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';
import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Text from 'components/Text';
import media from 'utils/media';
import { COLOR, SPACE } from 'config';


const Icon = styled.img.attrs({
  src: props => props.src,
})`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: ${rem(SPACE[4])};
  
  ${media.sm.css`
    margin-bottom: 0;  
  `}
`;

const FeatureWrapper = styled(Flex)`
  background: ${props => (props.even ? COLOR.white : COLOR.paleGrey)};
  
  ${media.sm.css`
    padding-left: 0;
  `}
`;

const Feature = ({ name, image, even, textId }) => (
  <FeatureWrapper p={7} mx={[-7, 0]} wrap align="center" even={even}>
    <Flex width={[1, 1 / 3]} justify="center" px={5}>
      <Icon src={image} />
    </Flex>
    <Box width={[1, 2 / 3]}>
      <SubHeading heavy as="h4" mb={4} fontSize={3} color="black">
        <FormattedMessage id={`${textId}.${name}.title`} />
      </SubHeading>
      <Text fontSize={2} color="black" m={0}>
        <FormattedHTMLMessage id={`${textId}.${name}.text`} />
      </Text>
    </Box>
  </FeatureWrapper>
);


Feature.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  even: PropTypes.bool.isRequired,
  textId: PropTypes.string.isRequired,
};

const Features = ({ textId, items, images }) => (
  <Box py={[8, 10, 13]}>
    <Container>
      <Heading heavy as="h2" mb={2} fontSize={[6, 7]} color={COLOR.textDark}>
        <FormattedMessage id={`${textId}.heading`} />
      </Heading>
      {items.map((item, i) => (
        <Feature name={item} image={images[item]} even={i % 2 === 0} key={i} textId={textId} />
      ))}
    </Container>
  </Box>
);


Features.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  textId: PropTypes.string.isRequired,
};

export default Features;
