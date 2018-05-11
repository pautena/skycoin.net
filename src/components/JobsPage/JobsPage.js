import React from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';

import Header from 'components/Header';
import Heading from 'components/Heading';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Text from 'components/Text';
import Link from 'components/Link';
import { rem } from 'polished';

import { SPACE, FONT_FAMILIES, FONT_SIZES, COLOR } from 'config';

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

const Section = styled.section`
  margin-bottom: 3em;
`;

const StyledLink = styled(Link)`
  margin-left: 7px;
  text-decoration: none;
  color: ${COLOR.base};
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
        <Heading heavy as="h2" fontSize={[6, 7]} color="black" mb={[0]}>
          Skycoin is hiring developers.
        </Heading>
        <Text fontSize={[2, 2, 3]} color="black" heavy>
          If you would like to work with us, send an email to jobs@skycoin.net with
          this information:
        </Text>
        <Section>
          <StyledList>
            <StyledListItem>Name</StyledListItem>
            <StyledListItem>Name</StyledListItem>
            <StyledListItem>Skills</StyledListItem>
            <StyledListItem>Full-time or part-time</StyledListItem>
            <StyledListItem>Timezone</StyledListItem>
            <StyledListItem>Which of Skycoin’s projects you’re most interested in</StyledListItem>
            <StyledListItem>Brief résumé</StyledListItem>
          </StyledList>

          <Divider />
          <Text fontSize={2} color="black" linkColor={COLOR.base}>
            All of our projects are developed in Go. For frontend work, we use Angular 2
            or React.js. <br />
            Our team is spread across the world and you will be working remotely.
            We communicate using
            <StyledLink href="https://t.me/skycoindev" target="_blank">telegram</StyledLink> and
            <StyledLink href="https://discord.gg/EgBenrW" target="_blank">discord</StyledLink>.
            <br /> Some of our open positions include:</Text>
          <StyledList>
            <StyledListItem>Sr. Go Developer [golang] [multiple positions]</StyledListItem>
            <StyledListItem>Sr. Angular 2 Developer</StyledListItem>
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
