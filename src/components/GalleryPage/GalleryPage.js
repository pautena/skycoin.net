import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { Helmet } from 'react-helmet';
import { FormattedMessage, injectIntl } from 'react-intl';
import scrollToComponent from 'react-scroll-to-component';
import { rem } from 'polished';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SignUpSection from 'components/SignUpSectionSecondary';
import Container from 'components/Container';
import Heading from 'components/Heading';
import { FONT_FAMILIES, FONT_SIZES, COLOR, SPACE } from 'config';
import Gallery from './components/Gallery';

import { wallet, antenna, skyminer, diySkyminer } from './content';

const scrollOptions = {
  offset: 0,
  align: 'top',
};

const Link = styled.a`
  display: inline-block;
  font-size: ${rem(FONT_SIZES[5])};  
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 1.5;
  margin-right: ${rem(SPACE[7])};
  border-bottom: 2px solid ${props => (props.active ? COLOR.base : 'transparent')};
  
  &:hover {
    cursor: pointer;
    border-bottom-color: ${COLOR.base};
  }
`;

class GalleryPage extends React.PureComponent {
  render() {
    const { intl } = this.props;

    return (
      <div>
        <Helmet>
          <title>{intl.formatMessage({ id: 'gallery.title' })}</title>
          <meta
            name="description"
            content={intl.formatMessage({ id: 'gallery.description' })}
          />
        </Helmet>

        <Header border />
        <Container>
          <Heading heavy as="h2" mb={0} mt={[7, 9]} fontSize={[6, 7]} color={COLOR.textDark}>
            <FormattedMessage id="gallery.heading" />
          </Heading>

          <Flex mt={9} mb={7} wrap>
            <Link onClick={() => scrollToComponent(this.Antennas, scrollOptions)} active>
              <FormattedMessage id="gallery.antennas.heading" />
            </Link>
            <Link onClick={() => scrollToComponent(this.Wallet, scrollOptions)}>
              <FormattedMessage id="gallery.wallet.heading" />
            </Link>
            <Link onClick={() => scrollToComponent(this.Skyminer, scrollOptions)}>
              <FormattedMessage id="gallery.skyminer.heading" />
            </Link>
            <Link onClick={() => scrollToComponent(this.DiySkyminer, scrollOptions)}>
              <FormattedMessage id="gallery.diySkyminer.heading" />
            </Link>
          </Flex>

          <div ref={(section) => { this.Antennas = section; }} >
            <Gallery items={antenna} />
          </div>
          <div ref={(section) => { this.Wallet = section; }} >
            <Gallery items={wallet} heading="gallery.wallet.heading" />
          </div>
          <div ref={(section) => { this.Skyminer = section; }} >
            <Gallery items={skyminer} heading="gallery.skyminer.heading" />
          </div>
          <div ref={(section) => { this.DiySkyminer = section; }} >
            <Gallery items={diySkyminer} heading="gallery.diySkyminer.heading" />
          </div>
        </Container>
        <SignUpSection />
        <Footer />
      </div>
    );
  }
}

GalleryPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(GalleryPage);
