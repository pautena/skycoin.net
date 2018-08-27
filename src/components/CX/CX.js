import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import { Box } from 'grid-styled';

import Header from 'components/Header';
import Footer from 'components/Footer';
import TopBanner from 'components/TopBanner';
import Features from 'components/Features';
import SignUpSection from 'components/SignUpSectionSecondary';
import About from './components/About';

import banner from './CX.svg';
import * as images from './images';

const featureItems = [
  'affordances',
  'programming',
  'deterministic',
  'typing',
  'complied',
  'garbage',
  'object',
];
const Banner = styled(TopBanner)`
  background-color: #101F34;
`;

const CX = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'cx.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'cx.description' })}
      />
    </Helmet>

    <Header />
    <Banner src={banner} />
    <About />
    <Box mb={[5, 10]}>
      <Features items={featureItems} images={images} textId="cx.features" />
    </Box>
    <SignUpSection />
    <Footer />
  </div>
);

CX.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(CX);
