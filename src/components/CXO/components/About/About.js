import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Text from 'components/Text';
import Quote from 'components/Quote';
import { rem } from 'polished';
import media from 'utils/media';

import { COLOR, SPACE } from 'config';
import * as images from './images';

const Article = styled.article`
  margin-bottom: ${rem(SPACE[5])};
  
  ${media.sm.css`
    column-count: 2;
    column-gap: ${rem(SPACE[7])};  
    margin-bottom: ${rem(SPACE[7])};
  `}
`;

const ecosystemItems = [
  'skywire',
  'cx',
  'cxo',
];


const Icon = styled.img.attrs({
  src: props => props.src,
})`
  display: block;
  max-width: 100%;
  height: auto;
  margin-right: ${rem(SPACE[2])};
`;

const InfoItem = ({ name }) => (
  <Flex width={[1, 1 / 2, 1 / 3]} px={[6, 6, 8]} mb={5} align="flex-start">
    <Icon src={images[name]} />
    <div>
      <Heading heavy as="h4" mb={1} fontSize={4} color="black">
        <FormattedMessage id={`cxo.about.${name}.title`} />
      </Heading>
      <Text fontSize={2} color="black">
        <FormattedMessage id={`cxo.about.${name}.text`} />
      </Text>
    </div>
  </Flex>
);

InfoItem.propTypes = {
  name: PropTypes.string.isRequired,
};

const About = () => (
  <Box pb={[8, 10]}>
    <Container>
      <Heading heavy as="h2" mb={2} mt={[5, 7]} fontSize={[6, 7]} color={COLOR.textDark}>
        <FormattedMessage id="cxo.about.heading" />
      </Heading>
      <SubHeading fontSize={2}>
        <FormattedMessage id="cxo.about.subheading" />
      </SubHeading>
      <Quote fontSize={5} my={[5, 7]}>
        <FormattedMessage id="cxo.about.quote" />
      </Quote>
      <Flex align="flex-start" justify="flex-start" wrap mt={5} mx={[-6, -6, -8]}>
        {ecosystemItems.map((item, i) => <InfoItem name={item} key={i} />)}
      </Flex>
      <Article>
        <Text fontSize={2} color={COLOR.textDark}>
          <FormattedMessage id="cxo.about.paragraph1" />
        </Text>
        <Text fontSize={2} color={COLOR.textDark}>
          <FormattedMessage id="cxo.about.paragraph2" />
        </Text>
      </Article>
    </Container>
  </Box>
);

export default About;
