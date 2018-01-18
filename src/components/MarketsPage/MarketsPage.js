import React from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import MarketsList from './components/MarketsList/MarketsList';

const MarketsPage = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'markets.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'markets.description' })}
      />
    </Helmet>
    <Header border />
    <Container>
      <MarketsList />
    </Container>
    <Footer />
  </div>
);

// export default MarketsPage;


MarketsPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(MarketsPage);
