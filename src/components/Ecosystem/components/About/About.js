import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Text from 'components/Text';
import { rem } from 'polished';

import { COLOR, SPACE } from 'config';

const Wrapper = styled(Box)`
  background: ${COLOR.dark};
  overflow: hidden;
`;

const StyledText = styled(Text)`
  column-count: 2;
  column-gap: ${rem(SPACE[7])};
`;


const About = () => (
  <Wrapper py={[6, 10, 13]}>
    <Container>
      <Heading heavy as="h2" fontSize={[6, 7]} width={[1, 2 / 3]} color="white">
        <FormattedMessage id="ecosystem.about.heading" />
      </Heading>
      <SubHeading fontSize={2} mb={[5, 8]} >
        <FormattedMessage id="ecosystem.about.subheading" />
      </SubHeading>
      <StyledText fontSize={2} my={[4, 6]} color="white">
        <FormattedMessage id="ecosystem.about.body" />
      </StyledText>
    </Container>
  </Wrapper>
);

export default About;
