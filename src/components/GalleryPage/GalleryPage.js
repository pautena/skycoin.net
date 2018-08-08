import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SignUpSection from 'components/SignUpSectionSecondary';
import Gallery from './components/Gallery';

import content from './content';

const GalleryPage = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'cxo.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'cxo.description' })}
      />
    </Helmet>

    <Header border />
    <Gallery items={content} />
    <SignUpSection />
    <Footer />
  </div>
);

GalleryPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(GalleryPage);
