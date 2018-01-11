import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import moment from 'moment';

import { DISTRIBUTION_START } from 'config';
import GetStarted from 'components/GetStarted';
import Header from 'components/Header';
import Footer from 'components/Footer';
import BuyBanner from 'components/BuyBanner';
import About from 'components/Home/components/About';
import Roadmap from 'components/Home/components/Roadmap';
import Hero from './components/Hero';
import { eventInProgress } from './eventStatus';

const Distribution = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'distribution.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({
          id: 'distribution.description',
        }, {
          date: moment(DISTRIBUTION_START).locale(intl.locale).format('LL'),
        })}
      />
    </Helmet>
    <Header />
    <Hero />
    {!eventInProgress && <BuyBanner />}
    <About />
    <Roadmap />
    <GetStarted />
    <Footer />
  </div>
);

Distribution.propTypes = {
  intl: PropTypes.shape({
    locale: PropTypes.string,
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Distribution);
