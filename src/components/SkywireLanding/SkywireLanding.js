import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { rem } from 'polished';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import Heading from 'components/Heading';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Button from 'components/Button';

import features from './features';
import { COLOR, SPACE, FONT_SIZES } from '../../config';

import WatchNow from './components/WatchNow';
import Afee from './components/Afee';
import FeatureItem from './components/FeatureItem';

import banner from './images/skywire.svg';

const LandingContainer = styled.div`
  background-color: ${COLOR.lightGrey};
`;

const Container = styled(Flex)`
  flex-direction:column;
  align-items:center;
  margin: 0 auto;
  width: 100%;
  max-width: 50rem;
  padding:${rem(SPACE[7])};
  box-sizing: border-box;
`;

const DividerHeading = styled(Heading)`
  line-height:${rem(SPACE[10])};
  text-align:center;
`;

const BottomWrapper = styled(Flex)`
  flex-direction:column;
  align-items:center;
  margin-bottom:${rem(SPACE[9])};
`;

const BottomHeading = styled(DividerHeading)`
  line-height:${rem(SPACE[9])};  

  b{
    font-weight:normal;
    color:${COLOR.base};
  }
`;

const StyledBottomButton = styled(Button)`
  color:${COLOR.white};
  background-color:${COLOR.base};
  border-radius:5px;
  padding: ${rem(SPACE[4])} ${rem(SPACE[5])};

  &:hover{
    background-color:${COLOR.base};
  }
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
    <Hero
      banner={banner}
      title="landing.skyware.hero.title"
      description="landing.skyware.hero.heading"
      buttonText="landing.skyware.hero.button"
      to="/skywire"
    />
    <Container>
      <WatchNow />
      <Afee />
      <DividerHeading as="h2" heavy fontSize={rem(FONT_SIZES[7])}>
        <FormattedMessage id="landing.skyware.divider" />
      </DividerHeading>
      { features.map(item =>
        (<FeatureItem
          title={item.title}
          description={item.description}
          image={item.image}
        />))}
      <BottomWrapper>
        <BottomHeading heavy textAlign="center" fontSize={rem(FONT_SIZES[7])}>
          <FormattedHTMLMessage id="landing.skyware.bottom.text" />
        </BottomHeading>
        <StyledBottomButton href="https://store.skycoin.com">
          <FormattedMessage id="landing.skyware.bottom.button" />
        </StyledBottomButton>
      </BottomWrapper>
    </Container>
    <Footer />
  </LandingContainer>
);

Skywire.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Skywire);
