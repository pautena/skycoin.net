import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { Helmet } from 'react-helmet';
import { injectIntl, FormattedMessage } from 'react-intl';
import $ from 'jquery';
import { SPACE, COLOR } from 'config';

import Heading from 'components/Heading';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import loading from './images/loading.svg';
// import MarketsList from './components/MarketsList/MarketsList';

const Wrap = styled.div`
  margin-bottom: ${rem(SPACE[9])};
`;

const Title = styled.div`
  margin-bottom: ${rem(SPACE[8])};
`;

const CryptowolfWrapper = styled.div`
  width: 100%;
  min-height: ${rem(400)};
`;

const LoadingMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${rem(SPACE[8])};
`;

const ImageContainer = styled.div`
  padding-top: ${rem(SPACE[4])};
`;

const Image = styled.img`
  width: 30px;
`;

class MarketsPage extends PureComponent {
  componentDidMount() {
    const cryptoUrl = 'https://external.cryptowolf.eu/main-backend/';
    /* eslint-disable */
    window.external = 'sky';
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
        <Wrap>
          <Title>
            <Heading heavy as="h2" mb={2} mt={[5, 7]} fontSize={[6, 7]} color={COLOR.textDark}>
              <FormattedMessage id="markets.title" />
            </Heading>
          </Title>
          <link rel="stylesheet" id="pl-style-css" href={`${process.env.PUBLIC_URL}/orfeo-alt.css`} type="text/css" media="all" />
          <CryptowolfWrapper id="cryptowolf-container">
            <LoadingMessage>
              <FormattedMessage id="markets.loading" />
              <ImageContainer px={2}>
                <Image src={loading} />
              </ImageContainer>
            </LoadingMessage>
          </CryptowolfWrapper>
        </Wrap>
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
