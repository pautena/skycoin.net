import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Container from 'components/Container';
import Logo from 'components/Logo';
import Heading from 'components/Heading';
import Button from 'components/Button';
import TopBanner from 'components/TopBanner';
import media from 'utils/media';
import { COLOR } from 'config';
import banner from "../SkywireLanding/images/skywire.png";

const Wrapper = styled(Flex)`
  position: relative;
  height: auto;
  box-sizing: border-box;
  background: ${COLOR.white};
  background-size: cover;
  overflow: hidden;

  /*${media.sm.css`
    min-height: 100vh;
  `}*/
`;

const Intro = styled(Flex)`
  position: relative;
  z-index: 1;
`;

const IntroContent = styled(Box)`
  position: relative;
  z-index: 1;
  display: block;
  
  ${media.sm.css`
    max-width: 25rem;
  `}
`;

const StyledIntro = styled(Intro)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const StyledLogoContainer = styled.div`
  position: absolute;
  top: 50px;
  height: 100%;
  width: 100%;
`;

const MinerHero = ({ onClick }) => (
  <Wrapper column>
    <StyledLogoContainer>
      <Container>
        <Logo white />
      </Container>
    </StyledLogoContainer>
    <TopBanner src={banner} />
    <StyledIntro align="center">
      <Container>
        <IntroContent>
          <Heading heavy as="h1" fontSize={[9]} color="white">
            <FormattedHTMLMessage id="landing.skyware.hero.title" />
          </Heading>
          <Heading heavy as="h1" fontSize={[3]} color="white">
            <FormattedHTMLMessage id="landing.skyware.hero.heading" />
          </Heading>
          <Button big color="#fff" bg="#000" width={['auto']} mt={5} onClick={onClick}>
            <FormattedMessage id="landing.skyware.hero.button" />
          </Button>
        </IntroContent>
      </Container>
    </StyledIntro>
  </Wrapper>
);

MinerHero.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MinerHero;
