import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import GetStarted from 'components/GetStarted';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Whitepapers from './components/Whitepapers';

const WhitepapersPage = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'whitepapers.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'whitepapers.description' })}
      />
    </Helmet>
    <Header border />

    <Whitepapers />

    <GetStarted />
    <Footer />
  </div>
);

WhitepapersPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(WhitepapersPage);
