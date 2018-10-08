import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage, injectIntl } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';
import { SPACE, FONT_FAMILIES, FONT_SIZES, COLOR } from 'config';
import media from 'utils/media';

import Header from 'components/Header';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Text from 'components/Text';
import Expander from './components/Expander';


const Wrapper = styled.div`
  padding: 2em 0;
`;
const StyledText = styled(Text) `
  font-family: SkycoinSansBold, sans-serif;
  display: inline;
  margin: 0;
  text-transform: uppercase;
  color: #07172E;
  font-size: ${rem(FONT_SIZES[2])};

  ${media.md.css`
    font-size: ${rem(FONT_SIZES[3])};  
  `}
`;
const StyledText2 = styled(StyledText) `
  margin: 0;
  text-transform: uppercase;
  font-family: SkycoinSansBold, sans-serif;
  font-size: ${rem(FONT_SIZES[2])};
  color: #07172E;

  ${media.md.css`
    font-size: ${rem(FONT_SIZES[3])};  
  `}
`;
const StyledList = styled.ul`
  margin: 0 0 ${rem(SPACE[4])};
  font-size: ${FONT_SIZES[2]}px;
  color: #394049;
  font-family: ${FONT_FAMILIES.sans};
  line-height: 1.75rem;
  list-style-type: none;
`;
const StyledListItem = styled.li`
  list-style-position: inside;
  position: relative;
  padding-left: 20px;

  &::before {
    position: absolute;
    width: 4px;
    height: 4px;
    content: '';
    background-color: ${COLOR.base};
    left: 0;
    top: 13px;
  }
`;
const StyledLink = styled.a`
  font-family: SkycoinSans, sans-serif;
  font-size: ${rem(FONT_SIZES[3])};
  margin-left: 7px;
  text-decoration: none;
  color: ${COLOR.base};
`;
const ContentOuter = styled(Flex) `
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 55px;
`;
const ContentInner = styled(Box) `
  background-color: ${COLOR.lightBlue};
  padding: 20px;
  margin-bottom: 20px;
`;
const QuoteContainer = styled.div`
  display: flex;
  margin-bottom: 35px;
`;
const QuoteLine = styled.div`
  border: 2px solid #92A4BA;
  border-radius: 2px;
  width: 1px;
  background-color: #92A4BA;
`;
const Quote = styled.div`
  padding-left: ${rem(SPACE[2])};
  text-transform: uppercase;

  ${media.md.css`
    font-size: ${rem(SPACE[5])};  
  `}
`;
const Line = styled.div`
  height: 1px;
  background-color: #92A4BA;
`;
const Subtitle = styled(Text) `
  text-transform: uppercase;
  color: ${COLOR.black};
  font-family: SkycoinSansBold, sans-serif;
  font-size: ${rem(FONT_SIZES[2])};
`;
const NumberedList = styled.ol`
  width: calc(100% - 15px);
  margin: 0 0 ${rem(SPACE[6])} 15px;
  font-size: ${FONT_SIZES[2]}px;
  color: #394049;
  font-family: ${FONT_FAMILIES.sans};
  line-height: 1.75rem;
`;
const NumberedListItem = styled.li`
  list-style-position: inside;
  position: relative;
  padding-left: 5px;
  list-style-position: outside;
`;
const Bold = styled.span`
  font-weight: 600;
`;

const renderAccordion1Content = () => (
  <div>
    <Subtitle fontSize={[1, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion1.description" />
    </Subtitle>
    <Text fontSize={[2]} color="black" heavy mb={[6]}>
      <FormattedMessage id="jobs.accordion1.study" />
    </Text>

    <Subtitle fontSize={[1, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion1.responsibilities.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.responsibilities.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.responsibilities.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.responsibilities.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.responsibilities.item4" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.responsibilities.item5" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion1.requirements.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.requirements.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.requirements.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.requirements.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.requirements.item4" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.requirements.item5" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.requirements.item6" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion1.priority.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.priority.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.priority.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.priority.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.priority.item4" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion1.propgram.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.propgram.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion1.propgram.item2" />
      </NumberedListItem>
    </NumberedList>
  </div>
);
const renderAccordion2Content = () => (
  <div>
    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion2.description" />
    </Subtitle>
    <Text fontSize={[2]} color="black" heavy mb={[6]}>
      <FormattedMessage id="jobs.accordion2.subtitle" />
    </Text>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion2.responsibilities.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.responsibilities.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.responsibilities.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.responsibilities.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.responsibilities.item4" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion2.requirements.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.requirements.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.requirements.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.requirements.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.requirements.item4" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.requirements.item5" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.requirements.item6" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.requirements.item7" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion2.priority.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.priority.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.priority.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.priority.item3" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion2.program.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.program.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion2.program.item2" />
      </NumberedListItem>
    </NumberedList>
  </div>
);
const renderAccordion3Content = () => (
  <div>
    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion2.description" />
    </Subtitle>
    <Text fontSize={[2]} color="black" heavy mb={[6]}>
      <FormattedMessage id="jobs.accordion3.description" />
    </Text>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion3.responsibilities.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.responsibilities.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.responsibilities.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.responsibilities.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.responsibilities.item4" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.responsibilities.item5" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion3.requirements.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.requirements.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.requirements.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.requirements.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.requirements.item4" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.requirements.item5" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.requirements.item6" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.requirements.item7" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion3.priority.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.priority.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.priority.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.priority.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.priority.item4" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.priority.item5" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion3.program.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.program.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion3.program.item2" />
      </NumberedListItem>
    </NumberedList>
  </div>
);
const renderAccordion4Content = () => (
  <div>
    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion2.description" />
    </Subtitle>
    <Text fontSize={[2]} color="black" heavy mb={[6]}>
      <FormattedMessage id="jobs.accordion4.description" />
    </Text>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion4.responsibilities.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.responsibilities.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.responsibilities.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.responsibilities.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.responsibilities.item4" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion4.requirements.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.requirements.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.requirements.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.requirements.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.requirements.item4" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.requirements.item5" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.requirements.item6" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.requirements.item7" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion4.priority.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.priority.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.priority.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.priority.item3" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion4.program.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.program.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion4.program.item2" />
      </NumberedListItem>
    </NumberedList>
  </div>
);
const renderAccordion5Content = () => (
  <div>
    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion2.description" />
    </Subtitle>
    <Text fontSize={[2]} color="black" heavy mb={[6]}>
      <FormattedMessage id="jobs.accordion5.description" />
    </Text>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion5.responsibilities.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.responsibilities.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.responsibilities.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.responsibilities.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.responsibilities.item4" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion5.requirements.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.requirements.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.requirements.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.requirements.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.requirements.item4" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion5.priority.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.priority.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.priority.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.priority.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.priority.item4" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion5.program.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.program.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion5.program.item2" />
      </NumberedListItem>
    </NumberedList>
  </div>
);
const renderAccordion7Content = () => (
  <div>
    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion2.description" />
    </Subtitle>
    <Text fontSize={[2]} color="black" heavy mb={[6]}>
      <FormattedMessage id="jobs.accordion7.description" />
    </Text>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion7.responsibilities.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.responsibilities.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.responsibilities.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.responsibilities.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.responsibilities.item4" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion7.requirements.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.requirements.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.requirements.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.requirements.item3" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.requirements.item4" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.requirements.item5" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.requirements.item6" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.requirements.item7" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.requirements.item8" />
      </NumberedListItem>
    </NumberedList>

    <Subtitle fontSize={[2, 2, 3]} heavy mb={[2, 3]}>
      <FormattedMessage id="jobs.accordion7.priority.title" />
    </Subtitle>
    <NumberedList>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.priority.item1" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.priority.item2" />
      </NumberedListItem>
      <NumberedListItem>
        <FormattedMessage id="jobs.accordion7.priority.item3" />
      </NumberedListItem>
    </NumberedList>
  </div>
);

const JobsPage = () => (
  <div>
    <Helmet>
      <title>Skycoin Jobs</title>
      <meta
        name="description"
        content="Skycoin is hiring developers"
      />
    </Helmet>
    <Header border />
    <Container>
      <Wrapper>

        <Heading heavy as="h2" fontSize={[6, 7]} color={COLOR.textDark} mb={2}>
          <FormattedMessage id="jobs.title" />
        </Heading>
        <SubHeading fontSize={[1, 1, 2]} normal mb={[8, 10]}>
          <FormattedMessage id="jobs.subtitle" />
        </SubHeading>

        <ContentOuter>
          <Box width={[1, 35 / 100]}>
            <ContentInner>
              <QuoteContainer>
                <QuoteLine />
                <Quote>
                  <StyledText>
                    <FormattedMessage id="jobs.sidebarTitle1" />
                  </StyledText>
                  <StyledLink href="mailto:jobs@skycoin.net">jobs@skycoin.net</StyledLink><br />
                  <StyledText2 >
                    <FormattedMessage id="jobs.sidebarTitle2" />
                  </StyledText2>
                </Quote>
              </QuoteContainer>

              <Text>
                <StyledList>
                  <StyledListItem>
                    <FormattedMessage id="jobs.sidebarList.name" />
                  </StyledListItem>
                  <StyledListItem>
                    <FormattedMessage id="jobs.sidebarList.skills" />
                  </StyledListItem>
                  <StyledListItem>
                    <FormattedMessage id="jobs.sidebarList.time" />
                  </StyledListItem>
                  <StyledListItem>
                    <FormattedMessage id="jobs.sidebarList.timezone" />
                  </StyledListItem>
                  <StyledListItem>
                    <FormattedMessage id="jobs.sidebarList.projects" />
                  </StyledListItem>
                  <StyledListItem>
                    <FormattedMessage id="jobs.sidebarList.resume" />
                  </StyledListItem>
                  <StyledListItem>
                    <FormattedMessage id="jobs.sidebarList.telegram" />
                  </StyledListItem>
                </StyledList>
              </Text>
            </ContentInner>

            <ContentInner>
              <Text fontSize={2} color="black" linkColor={COLOR.base}>
                <FormattedMessage id="jobs.ourProject" />
                <Bold><FormattedMessage id="jobs.angular" /></Bold>
                <FormattedMessage id="jobs.or" />
                <Bold><FormattedMessage id="jobs.react" /></Bold>
              </Text>
              <Text fontSize={2} color="black" linkColor={COLOR.base}>
                <FormattedMessage id="jobs.ourTeam" />
                <StyledLink href="https://t.me/skycoindev" target="_blank">telegram</StyledLink> and
                <StyledLink href="https://discord.gg/EgBenrW" target="_blank">discord</StyledLink>.
              </Text>
            </ContentInner>
          </Box>
          <Box width={[1, 65 / 100]} pl={[0, 35]}>

            <Expander title={<FormattedMessage id="jobs.accordion1.title" />}>
              {renderAccordion1Content()}
            </Expander>

            <Expander title={<FormattedMessage id="jobs.accordion2.title" />}>
              {renderAccordion2Content()}
            </Expander>

            <Expander title={<FormattedMessage id="jobs.accordion3.title" />}>
              {renderAccordion3Content()}
            </Expander>

            <Expander title={<FormattedMessage id="jobs.accordion4.title" />}>
              {renderAccordion4Content()}
            </Expander>

            <Expander title={<FormattedMessage id="jobs.accordion5.title" />}>
              {renderAccordion5Content()}
            </Expander>

            <Expander title={<FormattedMessage id="jobs.accordion7.title" />}>
              {renderAccordion7Content()}
            </Expander>

            <Line />
          </Box>
        </ContentOuter>
      </Wrapper>
    </Container>
    <Footer />
  </div>
);

export default injectIntl(JobsPage);
