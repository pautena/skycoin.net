import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { COLOR } from 'config';

import Hero from './components/Hero';
import Banner from './components/Banner';
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
`;

const Home = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'home.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'home.description' })}
      />
      <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="preload" onLoad="this.rel='stylesheet'" as="style" />
    </Helmet>
    <HeaderWrapper>
      <Banner />
      <Header white social showBuy={false} />
    </HeaderWrapper>
    <Hero />
    <Press />
    <Miner />
    <Network />
    <Ecosystem />
    <News locale={intl.locale} />
    <SignUp />
    <Footer />
  </div>
);

Home.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Home);
