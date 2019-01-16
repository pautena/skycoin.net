import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import Header from 'components/Header';
import Footer from 'components/Footer';

import FullScreenMessage from '../FullScreenMessage';

const LOAD_DELAY = 500;
const TIMEOUT_REDIRECT_DELAY = LOAD_DELAY + 3000;

const ThankYouContent = () =>
  (<div>
    <Header />
    <FullScreenMessage>
      <FormattedMessage id="thankYou.message" />
    </FullScreenMessage>
    <Footer />
  </div>
  );


class ThankYouPage extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    this.loading();
  }

  loading() {
    setTimeout(() => {
      this.setState({ loaded: true });
      this.redirect();
    }, LOAD_DELAY);
  }

  redirect() {
    setTimeout(() => {
      this.redirectToHome();
    }, TIMEOUT_REDIRECT_DELAY);
  }

  redirectToHome() {
    this.props.history.push({ pathname: '/' });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Thank you</title>
        </Helmet>
        {this.state.loaded ? <ThankYouContent /> : null}
      </div>
    );
  }
}

ThankYouPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default injectIntl(ThankYouPage);
