import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Box } from 'grid-styled';
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

const Quote = styled(Text)`
  padding: ${rem(SPACE[3])} 0 ${rem(SPACE[3])} ${rem(SPACE[7])};
  border-left: 3px solid ${COLOR.textGrey}
`;


const About = () => (
  <Box pb={[8, 10]}>
    <Container>
      <Heading heavy as="h2" mb={2} mt={[5, 7]} fontSize={[6, 7]} color={COLOR.textDark}>
        <FormattedMessage id="skywire.about.heading" />
      </Heading>
      <SubHeading fontSize={2}>
        <FormattedMessage id="skywire.about.subheading" />
      </SubHeading>
      <Quote fontSize={5} my={[5, 7]}>
        <FormattedMessage id="skywire.about.quote" />
      </Quote>
      <Article>
        <Text fontSize={2} color={COLOR.textDark}>
          <FormattedMessage id="skywire.about.paragraph1" />
        </Text>
        <Text fontSize={2} color={COLOR.textDark}>
          <FormattedMessage id="skywire.about.paragraph2" />
        </Text>
      </Article>
    </Container>
  </Box>
);

export default About;
