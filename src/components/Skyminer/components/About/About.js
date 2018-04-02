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

import { SPACE, FONT_FAMILIES, FONT_SIZES } from 'config';

const Wrapper = styled(Box)`
  overflow: hidden;
`;

const StyledText = styled(Text)`
`;

const StyledList = styled.ul`
  margin: 0 0 ${rem(SPACE[4])};
  font-size: ${FONT_SIZES[2]}px;
  color: #394049;
  font-family: ${FONT_FAMILIES.sans};
  line-height: 1.75rem;
`;

const StyledListItem = styled.li`
  list-style-position: inside;
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
      <Heading heavy as="h2" fontSize={[6, 7]} width={[1, 2 / 3]} color="black">
        <FormattedMessage id="skyminer.about.heading" />
      </Heading>
      <SubHeading fontSize={2} mb={[5, 8]}>
        <FormattedMessage id="skyminer.about.subheading" />
      </SubHeading>
      <Article>
        <StyledText fontSize={2} color="black">
          <FormattedMessage id="skyminer.about.paragraph1" />
        </StyledText>
        <StyledList>
          <StyledListItem>
            <FormattedMessage id="skyminer.about.list.item0" />
          </StyledListItem>
          <StyledListItem>
            <FormattedMessage id="skyminer.about.list.item1" />
          </StyledListItem>
          <StyledListItem>
            <FormattedMessage id="skyminer.about.list.item2" />
          </StyledListItem>
          <StyledListItem>
            <FormattedMessage id="skyminer.about.list.item3" />
          </StyledListItem>
          <StyledListItem>
            <FormattedMessage id="skyminer.about.list.item4" />
          </StyledListItem>
          <StyledListItem>
            <FormattedMessage id="skyminer.about.list.item5" />
          </StyledListItem>
        </StyledList>
        <StyledText fontSize={2} color="black">
          <FormattedMessage id="skyminer.about.paragraph2" />
        </StyledText>
        <StyledText fontSize={2} color="black">
          <FormattedMessage id="skyminer.about.paragraph3" />
        </StyledText>
      </Article>
    </Container>
  </Wrapper>
);

export default About;
