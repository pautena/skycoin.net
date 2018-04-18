import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { rem } from 'polished';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SignUpSection from 'components/SignUpSection';

import { SPACE } from 'config';
import media from 'utils/media';

import EcosystemSection from './components/EcosystemSection';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Whitepaper from './components/Whitepaper';

import banner from './ecosystem.svg';

const Banner = styled.img`
  width: 100%;
  margin-bottom: ${rem(SPACE[8])};
  
  ${media.sm.css`
    margin-bottom: ${rem(SPACE[10])};    
  `}
`;

const Ecosystem = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'ecosystem.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'ecosystem.description' })}
      />
    </Helmet>

    <Header />
    <Banner src={banner} />
    <EcosystemSection />
    <About />
    <Roadmap />
    <Whitepaper />
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
