import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
<<<<<<< HEAD
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { COLOR } from 'config';

import Hero from './components/Hero';
import Network from './components/Network';
import Miner from './components/Miner';
import Press from './components/Press';
import Ecosystem from './components/Ecosystem';
import News from './components/News';
import SignUp from './components/SignUp';

const HeaderWrapper = styled.div`
  position: relative;
  background: ${COLOR.dark};
  z-index: 2;
=======
import { injectIntl, FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import GetStarted from 'components/GetStarted';
import Heading from 'components/Heading';
import Label from 'components/Label';
import Link from 'components/Link';
import Text from 'components/Text';
import { eventInProgress } from 'components/Distribution/eventStatus';
import Footer from 'components/Footer';
import Hero from './components/Hero';
import DistributionEvent from './components/DistributionEvent';
import About from './components/About';
import Nav from './components/Hero/components/Nav';
import Network from './components/Network';
import Miner from './components/Miner';
import Logos from './components/Logos';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: none;
  }
>>>>>>> master
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

    <HeaderWrapper>
      <Header white social showBuy={false} />
    </HeaderWrapper>
    <Hero />
<<<<<<< HEAD
    <Press />
    <Miner />
    <Network />
    <Ecosystem />
    <News />
    <SignUp />
=======
    {eventInProgress && <DistributionEvent />}
    <About>
      <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
        <FormattedMessage id="home.about.heading" />
      </Heading>
      <Text fontSize={[3, 3, 4]} color="black" heavy>
        <FormattedMessage id="home.about.lead" />
      </Text>
      <Text fontSize={[2, 2, 3]} color="black">
        <FormattedMessage id="home.about.paragraph" />
      </Text>
      <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
        <FormattedMessage id="home.aboutSkywire.heading" />
      </Heading>
      <Text fontSize={[3, 3, 4]} color="black" heavy>
        <FormattedMessage id="home.aboutSkywire.lead" />
      </Text>
      <Text fontSize={[2, 2, 3]} color="black">
        <FormattedMessage id="home.aboutSkywire.paragraph" />
      </Text>
      <StyledLink href="https://www.skycoin.net/blog/tags/skywire/" target="_blank">
        <Label>
          <FormattedMessage id="home.aboutSkywire.button" />
        </Label>
      </StyledLink>
    </About>
    <Miner />
    <About>
      <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
        <FormattedMessage id="home.technology.header" />
      </Heading>
      <Nav />
    </About>
    <Network />
    <Logos />
    <GetStarted />
>>>>>>> master
    <Footer />
  </div>
);

Home.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Home);
