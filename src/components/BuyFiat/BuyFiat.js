import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { Helmet } from 'react-helmet';
import { injectIntl, FormattedMessage } from 'react-intl';
import $ from 'jquery';
import { SPACE, COLOR } from 'config';
import media from 'utils/media';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Button from '../Button/Button';
import Link from '../Link/Link';
import IndacoinApi from '../../services/IndacoinApi/IndacoinApi';
// import MarketsList from './components/MarketsList/MarketsList';

const Wrap = styled.div`
  margin-bottom: ${rem(SPACE[9])};
`;

const CryptowolfWrapper = styled.div`
  width: 100%;
`;

const LoadingMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${rem(SPACE[8])};
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  padding-bottom: 25px;
  height: 0;
  margin-top: ${rem(SPACE[6])};
  margin-bottom: ${rem(SPACE[10])};
  
  ${media.sm.css` 
    margin-top: ${rem(SPACE[8])};
    margin-bottom: ${rem(SPACE[13])};
  `}
  
  & > span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
  
  iframe {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

class MarketsPage extends PureComponent {
  constructor() {
    super();
    this.api = new IndacoinApi();
    this.state = { url: '' };
  }

  componentDidMount() {
    const cryptoUrl = 'https://external.cryptowolf.eu/main-backend/';
    /* eslint-disable */
    window.external = 'sky';
    $('#cryptowolf-container').load(`${cryptoUrl}ext.html`);
    $.getScript(`${cryptoUrl}js/cryptowolf.js`);
    /* eslint-enable */
  }

  onCreateTransactionClicked() {
    this.api.createTransaction(
      'info@abitari.com',
      50,
      'USD',
      'egnYzM4Yzfxik7GszjGthn2DE3fGAsdGgP',
    ).then(response => this.onTransactionCreationSuccess(response.data))
      .catch(error => this.showError(error));
  }

  onTransactionCreationSuccess(data) {
    console.log(data);
    const { transactionId } = data;
    this.api.getTransactionUrl(transactionId).then(url => this.onUrlGetSuccess(url))
      .catch(error => this.showError(error));
  }

  onUrlGetSuccess(url) {
    this.setState({ url });
  }

  showError(error) {
    // TODO: implement this
    console.log(error || 'Server error');
  }

  render() {
    const { url } = this.state;
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
          <Heading heavy as="h2" mb={5} mt={[5, 7]} fontSize={[6, 7]} color={COLOR.textDark}>
            <FormattedMessage id="markets.title" />
          </Heading>
          <Text fontSize={2} color={COLOR.textDark} mb={8}>
            <FormattedMessage id="markets.disclaimer" />
          </Text>
          <Container>
            <Button onClick={() => this.onCreateTransactionClicked()}>Create transaction</Button>
            <Text fontSize={2} color={COLOR.textDark} mb={8}>
              <Link href={url} />
            </Text>
          </Container>
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
