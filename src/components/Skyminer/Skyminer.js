import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Footer from 'components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import News from './components/News';
import Video from './components/Video';
import Newsletter from './components/Newsletter';

const Ecosystem = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'skyminer.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'skyminer.description' })}
      />
    </Helmet>

    <Hero />
    <About />
    <News />
    <Video />
    <Gallery />
    <Newsletter />

    <Footer isLanding />
  </div>
);

Ecosystem.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Ecosystem);
