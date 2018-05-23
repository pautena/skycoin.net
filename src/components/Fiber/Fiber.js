import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Header from 'components/Header';
import Footer from 'components/Footer';
import TopBanner from 'components/TopBanner';
import Features from 'components/Features';
import SignUpSection from 'components/SignUpSectionSecondary';

import About from './components/About';

import banner from './fiber.svg';
import * as images from './images';

const features = [
  'system',
  'forking',
  'blockchain',
  'token',
  'operation',
];

const Ecosystem = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'fiber.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'fiber.description' })}
      />
    </Helmet>

    <Header />
    <TopBanner src={banner} />
    <About />
    <Features items={features} images={images} textId="fiber.features" />
    <SignUpSection />
    <Footer />
  </div>
);

Ecosystem.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Ecosystem);
