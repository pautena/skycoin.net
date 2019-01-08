import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';
import FullScreenMessage from '../FullScreenMessage';

const ThankYouPage = () => (
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

export default injectIntl(ThankYouPage);
