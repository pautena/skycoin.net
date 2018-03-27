import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import $ from 'jquery';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
// import MarketsList from './components/MarketsList/MarketsList';

const CryptowolfWrapper = styled.div`
  width: 100%;
  min-height: ${rem(400)};
`;

class MarketsPage extends PureComponent {
  componentDidMount() {
    const cryptoUrl = 'https://external.cryptowolf.eu/main-backend/';
    /* eslint-disable */
    external = 'sky';
    $('#cryptowolf-container').load(`${cryptoUrl}ext.html`);
    $.getScript(`${cryptoUrl}js/cryptowolf-ext.js`);
    /* eslint-enable */
  }
  render() {
    return (<div>
      <Helmet>
        <title>{this.props.intl.formatMessage({ id: 'markets.title' })}</title>
        <meta
          name="description"
          content={this.props.intl.formatMessage({ id: 'markets.description' })}
        />
      </Helmet>
      <Header border />
      <Container>
        {/* <MarketsList /> */}
        <link rel="stylesheet" id="pl-style-css" href="https://external.cryptowolf.eu/main-backend/css/orfeo-alt.css" type="text/css" media="all" />
        <CryptowolfWrapper id="cryptowolf-container" />
      </Container>
      <Footer />
    </div>);
  }
}

MarketsPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(MarketsPage);
