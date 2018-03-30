import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import { rem } from 'polished';
import media from 'utils/media';

import { COLOR, SPACE } from 'config';

const Wrapper = styled(Box)`
  background: ${COLOR.dark};
  overflow: hidden;
`;

const StyledText = styled(Text)`
`;

const Article = styled.article`
  ${media.sm.css`
    column-count: 2;
    column-gap: ${rem(SPACE[7])};  
  `}
`;


const About = () => (
  <Wrapper py={[6, 10, 13]}>
    <Container>
      <Heading heavy as="h2" fontSize={[6, 7]} width={[1, 2 / 3]} color="white">
        <FormattedMessage id="ecosystem.about.heading" />
      </Heading>
      <Article>
        <StyledText fontSize={2} color="white">
          <FormattedHTMLMessage id="ecosystem.about.paragraph1" />
        </StyledText>
        <StyledText fontSize={2} color="white">
          <FormattedHTMLMessage id="ecosystem.about.paragraph2" />
        </StyledText>
        <StyledText fontSize={2} color="white">
          <FormattedHTMLMessage id="ecosystem.about.paragraph3" />
        </StyledText>
        <StyledText fontSize={2} color="white">
          <FormattedHTMLMessage id="ecosystem.about.paragraph4" />
        </StyledText>
      </Article>
    </Container>
  </Wrapper>
);

export default About;
