import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Header from 'components/Header';
import Footer from 'components/Footer';
import TopBanner from 'components/TopBanner';
import Features from 'components/Features';
import SignUpSection from 'components/SignUpSectionSecondary';
import WhitelistSignUp from 'components/WhitelistSignUp/WhitelistSignUp';
import About from './components/About';
import Video from './components/Video';

import banner from './skywire.svg';
import * as images from './images';

const featureItems = [
  'speed',
  'privacy',
  'security',
  'ecosystem',
  'internet',
];

const Skywire = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'skywire.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'skywire.description' })}
      />
    </Helmet>

    <Header />
    <TopBanner src={banner} />
    <About />
    <WhitelistSignUp />
    <Video />
    <Features items={featureItems} images={images} textId="skywire.features" />
    <SignUpSection />
    <Footer />
  </div>
);

Skywire.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Skywire);
