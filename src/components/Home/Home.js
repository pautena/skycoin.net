import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl, FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import GetStarted from 'components/GetStarted';
import Heading from 'components/Heading';
import Label from 'components/Label';
import Link from 'components/Link';
import Text from 'components/Text';
import { eventInProgress } from 'components/Distribution/eventStatus';
import Blog from 'components/Blog';
import Footer from 'components/Footer';
import Hero from './components/Hero';
import DistributionEvent from './components/DistributionEvent';
import About from './components/About';
import Network from './components/Network';
import Miner from './components/Miner';
import Logos from './components/Logos';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: none;
  }
`;

const Home = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'home.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'home.description' })}
      />
    </Helmet>

    <Hero />
    <Blog />
    {eventInProgress && <DistributionEvent />}
    <About>
      <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
        <FormattedMessage id="home.about.heading" />
      </Heading>

      <Text fontSize={[3, 3, 4]} color="black" heavy>
        <FormattedMessage id="home.about.lead" />
      </Text>
    </About>
    <Miner />
    <About>
      <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
        <FormattedMessage id="home.aboutSkywire.heading" />
      </Heading>

      <Text fontSize={[3, 3, 4]} mb={[4, 6]} color="black" heavy>
        <FormattedMessage id="home.aboutSkywire.lead" />
      </Text>
      <StyledLink href="https://blog.skycoin.net/tags/skywire/" target="_blank">
        <Label>
          <FormattedMessage id="home.miner.label" />
        </Label>
      </StyledLink>
    </About>
    <Network />
    <Logos />
    <GetStarted />
    <Footer />
  </div>
);

Home.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Home);
