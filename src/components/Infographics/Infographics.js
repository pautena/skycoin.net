import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { rem } from 'polished';
import map from 'lodash/map';

import GetStarted from 'components/GetStarted';
import Container from 'components/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';

import media from 'utils/media';
import { COLORS, SPACE } from 'config';
import * as slides from './slides';

const Slide = styled.img`
  display: block;
  width: 100%;
`;

const Wrapper = styled.div`
  padding: ${rem(SPACE[5])} 0;
  border-top: 2px solid ${COLORS.gray[1]};

  ${media.md.css`
    padding: ${rem(SPACE[7])} 0;
  `}
`;

const Infographics = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'infographics.title' })}</title>
    </Helmet>
    <Header />

    <Wrapper>
      <Container>
        {map(slides, (slide, i) => <Slide src={slide} key={i} />)}
      </Container>
    </Wrapper>

    <GetStarted />
    <Footer />
  </div>
);

Infographics.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Infographics);
