import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import Footer from 'components/Footer';
import TopBanner from 'components/TopBanner';
import Features from 'components/Features';
import SignUpSection from 'components/SignUpSectionSecondary';
import WhitelistSignUp from 'components/WhitelistSignUp/WhitelistSignUp';
import About from './components/About';
import Video from './components/Video';
import banner from './images/skywire.png';
import logo from './images/logo.png';
import * as images from './images';
import Logo from "components/Logo";
import Container from "components/Container";
import Hero from "components/Hero";

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
    <Hero />
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
