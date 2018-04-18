import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';
import media from 'utils/media';
import { SPACE } from 'config';

import GetStarted from 'components/GetStarted';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Whitepappers from 'components/WhitepapersPage/components/Whitepapers';
import Assets from './components/Assets';
import Wallet from './components/Wallet';
import BBS from './components/BBS';
import Skywire from './components/Skywire';

import bg from './bg.svg';

const Banner = styled.img`
  width: 100%;
  margin-bottom: ${rem(SPACE[8])};
  
  ${media.sm.css`
    margin-bottom: ${rem(SPACE[10])};    
  `}
`;

const Downloads = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'downloads.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'downloads.description' })}
      />
    </Helmet>
    <Header />
    <Banner src={bg} />
    <Wallet />
    <BBS />
    <Whitepappers />
    <Assets />
    <Skywire />

    <GetStarted />
    <Footer />
  </div>
);

Downloads.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Downloads);
