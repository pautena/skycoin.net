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
  height: ${rem(400)};
`;

class MarketsPage extends PureComponent {
  componentDidMount() {
    const geturlvar = 'https://cryptowolf.eu/skyexternal-backend/';
    $('#cryptowolf-container').load(geturlvar);
    $.getScript('https://www.google.com/recaptcha/api.js');
    $.getScript(`${geturlvar}js/cryptowolf.js`);
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
        <link rel="stylesheet" type="text/css" href="https://cryptowolf.eu/wp-content/themes/orfeo/css/mine.css" />
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
