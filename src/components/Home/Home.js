import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import Footer from 'components/Footer';

import Hero from './components/Hero';
import Network from './components/Network';
import Miner from './components/Miner';
import Press from './components/Press';
import Ecosystem from './components/Ecosystem';
import SignUp from './components/SignUp';

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
    <Press />
    <Miner />
    <Network />
    <Ecosystem />
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
