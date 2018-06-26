import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Text from 'components/Text';
import Link from 'components/Link';
import Quote from 'components/Quote';
import { rem } from 'polished';
import media from 'utils/media';

import { COLOR, SPACE } from 'config';

const mediumLink = 'https://medium.com/skycoin/skycoin-fiber-platform-bf64debfc60f';

const Article = styled.article`
  margin-bottom: ${rem(SPACE[5])};
  
  ${media.sm.css`
    column-count: 2;
    column-gap: ${rem(SPACE[7])};  
    margin-bottom: ${rem(SPACE[7])};
  `}
`;

const StyledLink = styled(Link)`
  color: ${COLOR.base};
  text-decoration: none;
`;

const About = () => (
  <Box>
    <Container>
      <Heading heavy as="h2" mb={2} mt={[5, 7]} fontSize={[6, 7]} color={COLOR.textDark}>
        <FormattedMessage id="fiber.about.heading" />
      </Heading>
      <SubHeading fontSize={2}>
        <FormattedMessage id="fiber.about.subheading" />
      </SubHeading>
      <Quote fontSize={5} my={[5, 7]}>
        <FormattedMessage id="fiber.about.quote" />
        (<StyledLink href={mediumLink} target="_blank"><FormattedMessage id="fiber.about.author" /></StyledLink>)
      </Quote>
      <Article>
        <Text fontSize={2} color={COLOR.textDark}>
          <FormattedMessage id="fiber.about.paragraph1" />
        </Text>
        <Text fontSize={2} color={COLOR.textDark}>
          <FormattedMessage id="fiber.about.paragraph2" />
        </Text>
      </Article>
    </Container>
  </Box>
);

export default About;
