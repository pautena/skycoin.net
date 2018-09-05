import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SignUpSection from 'components/SignUpSectionSecondary';
import Container from 'components/Container';
import Heading from 'components/Heading';
import { COLOR } from 'config';
import Gallery from './components/Gallery';

import { wallet, antenna, skyminer, diySkyminer } from './content';

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
    <Container>
      <Heading heavy as="h2" mb={0} mt={[7, 9]} fontSize={[6, 7]} color={COLOR.textDark}>
        Gallery
      </Heading>
      <Gallery items={antenna} heading="Antennas" />
      <Gallery items={wallet} heading="Hardware Wallet" />
      <Gallery items={skyminer} heading="Skyminer" />
      <Gallery items={diySkyminer} heading="DIY Skyminers" />
    </Container>
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
