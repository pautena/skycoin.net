import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import media from 'utils/media';

import Container from 'components/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TopBanner from 'components/TopBanner';
import Features from 'components/Features';
import SignUpSection from 'components/SignUpSectionSecondary';
import About from './components/About';
import Roadmap from './components/Roadmap';

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

const Line = styled.div`
  ${media.sm.css`
    border-bottom: 1px solid #ccc;
  `};
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
    <Box>
      <Features items={featureItems} images={images} textId="cx.features" />
      <Container>
        <Line />
      </Container>
    </Box>
    <Roadmap />
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
