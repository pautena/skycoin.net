import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';


import WhitelistSignUp from 'components/WhitelistSignUp/WhitelistSignUp';
import Footer from 'components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import News from './components/News';
import Video from './components/Video';
import Newsletter from './components/Newsletter';


class Ecosystem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setRef = this.setRef.bind(this);
    this.handleScrollToSection = this.handleScrollToSection.bind(this);
  }

  setRef(ref) {
    this.newsletter = ref;
  }

  handleScrollToSection() {
    this.newsletter.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { intl } = this.props;
    return (
      <div>
        <Helmet>
          <title>{intl.formatMessage({ id: 'skyminer.title' })}</title>
          <meta
            name="description"
            content={intl.formatMessage({ id: 'skyminer.description' })}
          />
        </Helmet>

        <Hero onClick={this.handleScrollToSection} />
        <About />
        <News locale={intl.locale} />
        <WhitelistSignUp />
        <Video />
        <Gallery />
        <Newsletter setRef={this.setRef} />

        <Footer />
      </div>
    );
  }
}

Ecosystem.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Ecosystem);
