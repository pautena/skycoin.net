import React from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';

import Header from 'components/Header';
import Heading from 'components/Heading';
import Footer from 'components/Footer';
import Container from 'components/Container';

import { FONT_FAMILIES } from 'config';

const Wrapper = styled.div`
  padding: 2em 0;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 2px solid #eceef0;
  display: block;
  margin: 2em 0;
  width: 100%;
`;

const Subheading = styled.strong`
  color: #394049;
  display: block;
  font-family: ${FONT_FAMILIES.sansBold};
  font-size: 1.25em;
  line-height: 1.4;
  margin: 0 0 1em;
`;

const Strong = styled.strong`
  display: block;
  font-family: ${FONT_FAMILIES.sansBold};
  font-size: 1em;
  line-height: 1.3;
  margin: 0 0 0.5em;
`;

const Paragraph = styled.p`
  font-family: ${FONT_FAMILIES.sans};
  line-height: 1.3;
  margin-bottom: 0.75em;
`;

const StyledList = styled.ul`
  font-family: ${FONT_FAMILIES.sans};
`;

const ListItem = styled.li`
  margin-bottom: 0.4em;
`;

const Section = styled.section`
  margin-bottom: 3em;
`;

const StyledLink = styled.a`
  color: #0072FF;
`;

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
        <Heading heavy as="h1" fontSize={[6, 7]} color="black" mb={[4, 6]}>
            Skycoin is hiring developers.
        </Heading>
        <Subheading>
          {
            // eslint-disable-next-line max-len
          }If you would like to work with us, send an email to jobs@skycoin.net with this information:
        </Subheading>
        <Section>
          <StyledList>
            <ListItem>Name</ListItem>
            <ListItem>Skills</ListItem>
            <ListItem>Full-time or part-time</ListItem>
            <ListItem>Timezone</ListItem>
            <ListItem>Which of Skycoin’s projects you’re most interested in</ListItem>
            <ListItem>Brief résumé</ListItem>
          </StyledList>
          <Divider />
          <Strong>
            {
              // eslint-disable-next-line max-len
            }All of our projects are developed in Go. For frontend work, we use Angular 2 or React.js.
          </Strong>
          <Paragraph>
            Our team is spread across the world and you will be working remotely.  We communicate using <StyledLink href="https://t.me/skycoindev" rel="noopener noreferrer" target="_blank">telegram</StyledLink> and <StyledLink href="https://discord.gg/EgBenrW" rel="noopener noreferrer" target="_blank">discord</StyledLink>.
          </Paragraph>
          <Paragraph>Some of our open positions include:</Paragraph>
          <StyledList>
            <ListItem>Sr. Go Developer [golang] [multiple positions]</ListItem>
            <ListItem>Sr. Angular 2 Developer</ListItem>
          </StyledList>
        </Section>
      </Wrapper>
    </Container>
    <Footer />
  </div>
);

JobsPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(JobsPage);
