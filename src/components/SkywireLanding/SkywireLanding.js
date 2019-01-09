import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl, FormattedHTMLMessage } from 'react-intl';
import { rem } from 'polished';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Flex } from 'grid-styled';

import Text from 'components/Text';
import features from './features';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import { COLOR,SPACE,FONT_SIZES } from '../../config';

import WatchNow from './components/WatchNow';
import Afee from './components/Afee';
import FeatureItem from './components/FeatureItem';
import Button from 'components/Button';

import banner from "./images/skywire.png";

const LandingContainer = styled.div`
  background-color: ${COLOR.lightGrey};
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 55rem;
  padding: 0 ${rem(SPACE[7])};
  box-sizing: border-box;
`;

const DividerText = styled(Text)`
  line-height:${rem(SPACE[9])};
`;

const BottomWrapper = styled(Flex)`
  flex-direction:column;
  align-items:center;

  margin-bottom:${rem(SPACE[9])};
`;

const BottomText = styled(Text)`
  line-height:${rem(SPACE[9])};  

  b{
    font-weight:normal;
    color:${COLOR.base};
  }
`;

const StyledBottomButton = styled(Button)`
  width:${rem(250)};
  color:${COLOR.white};
  background-color:${COLOR.base}
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
    <Hero banner={banner} 
          title='landing.skyware.hero.title' 
          description='landing.skyware.hero.heading'
          buttonText='landing.skyware.hero.button'/>
    <Container>
      <WatchNow/>
      <Afee/>
      <DividerText heavy textAlign='center' fontSize={rem(FONT_SIZES[9])}>
        <FormattedMessage id='landing.skyware.divider'/>
      </DividerText>
      {features.map((item)=><FeatureItem title={item.title} description={item.description} image={item.image}/>)}
      <BottomWrapper>
        <BottomText heavy textAlign='center' fontSize={rem(FONT_SIZES[7])}>
          <FormattedHTMLMessage id='landing.skyware.bottom.text'/>
        </BottomText>
        <StyledBottomButton><FormattedMessage id='landing.skyware.bottom.button'/></StyledBottomButton>
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
