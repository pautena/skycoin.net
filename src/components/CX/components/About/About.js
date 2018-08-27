import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Text from 'components/Text';
import { rem } from 'polished';
import media from 'utils/media';

import { COLOR, SPACE } from 'config';

const Article = styled.article`
  margin-bottom: ${rem(SPACE[5])};
  
  ${media.sm.css`
    column-count: 2;
    column-gap: ${rem(SPACE[7])};  
    margin-bottom: ${rem(SPACE[7])};
  `}
`;

const InfoItem = ({ name }) => (
  <Flex width={[1, 1 / 2, 1 / 3]} px={[6, 6, 8]} mb={5} align="flex-start">
    <div>
      <Heading heavy as="h4" mb={1} fontSize={4} color="black">
        <FormattedMessage id={`cx.about.${name}.title`} />
      </Heading>
      <Text fontSize={2} color="black">
        <FormattedMessage id={`cx.about.${name}.text`} />
      </Text>
    </div>
  </Flex>
);

InfoItem.propTypes = {
  name: PropTypes.string.isRequired,
};

const About = () => (
  <Box>
    <Container>
      <Heading heavy as="h2" mb={2} mt={[5, 7]} fontSize={[6, 7]} color={COLOR.textDark}>
        <FormattedMessage id="cx.about.heading" />
      </Heading>
      <SubHeading fontSize={2}>
        <FormattedMessage id="cx.about.subheading" />
      </SubHeading>
      <Article>
        <Text fontSize={2} color={COLOR.textDark}>
          <FormattedMessage id="cx.about.paragraph1" />
        </Text>
        <Text fontSize={2} color={COLOR.textDark}>
          <FormattedMessage id="cx.about.paragraph2" />
        </Text>
      </Article>
    </Container>
  </Box>
);

export default About;
