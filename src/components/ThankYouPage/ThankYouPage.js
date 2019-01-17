import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import Header from 'components/Header';
import Footer from 'components/Footer';

import FullScreenMessage from '../FullScreenMessage';

const TIMEOUT_REDIRECT_DELAY = 3000;


const redirect = (history) => {
  setTimeout(() => {
    history.push({ pathname: '/' });
  }, TIMEOUT_REDIRECT_DELAY);
};

const ThankYouPage = ({ history }) => {
  redirect(history);
  return (
    <div>
      <Helmet>
        <title>Thank you</title>
      </Helmet>
      <Header />
      <FullScreenMessage>
        <FormattedMessage id="thankYou.message" />
      </FullScreenMessage>
      <Footer />
    </div>
  );
};

ThankYouPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(ThankYouPage);
