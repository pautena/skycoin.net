import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import Container from 'components/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Languages from 'components/Languages';
import Text from 'components/Text';
import { COLOR } from 'config';
import BannerStore from './components/BannerStore';
import Hero from './components/Hero';
import Network from './components/Network';
import Miner from './components/Miner';
import Wallet from './components/Wallet';
import Press from './components/Press';
import Ecosystem from './components/Ecosystem';
import News from './components/News';
import SignUp from './components/SignUp';


const HeaderWrapper = styled.div`
  position: relative;
  background: ${COLOR.dark};
  z-index: 2;
`;

class Home extends React.PureComponent {
  render() {
    const { intl } = this.props;

    return (
      <div>
        <Helmet>
          <title>{intl.formatMessage({ id: 'home.title' })}</title>
          <meta
            name="description"
            content={intl.formatMessage({ id: 'home.description' })}
          />
          <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="preload" onLoad="this.rel='stylesheet'" as="style" />
        </Helmet>
        <BannerStore />
        <HeaderWrapper>
          <Container>
            <Text as="div" fontSize={[0, 0, 1]} color="gray.8" pt={5} mt={0} mb={-3} textAlign="right">
              <Languages />
            </Text>
          </Container>
          <Header white social showBuy={false} />
        </HeaderWrapper>
        <Hero />
        <Press />
        <Miner />
        <Wallet />
        <Network />
        <Ecosystem />
        <News locale={intl.locale} />
        <SignUp />
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Home);
