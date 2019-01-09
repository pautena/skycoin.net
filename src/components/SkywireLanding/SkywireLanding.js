import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import Footer from 'components/Footer';
import Hero from "components/Hero";
import Features from './components/Features';
import * as images from './images';
import { COLOR } from "../../config";

const featureItems = [
  'speed',
  'privacy',
  'security',
  'ecosystem',
  'internet',
];

const LandingContainer = styled.div`
  background-color: ${COLOR.lightGrey};
`;

const Skywire = ({ intl }) => (
  <LandingContainer>
    <Helmet>
      <title>{intl.formatMessage({ id: 'skywire.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'skywire.description' })}
      />
    </Helmet>
    <Hero />
    <Features items={featureItems} images={images} textId="skywire.features" />
    <Footer />
  </LandingContainer>
);

Skywire.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Skywire);
