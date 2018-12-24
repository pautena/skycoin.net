import React from 'react';
import PropTypes from 'prop-types';
import { rem, rgba } from 'polished';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Container from 'components/Container';
import Logo from 'components/Logo';
import Heading from 'components/Heading';
import Button from 'components/Button';
import TopBanner from 'components/TopBanner';
import media from 'utils/media';
import banner from "../SkywireLanding/images/skywire.png";
import { FONT_FAMILIES, COLOR, SPACE, FONT_SIZES } from 'config';


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
    max-width: 29rem;
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
  top: 5%;
  width: 100%;
`;

const StyledTopBanner = styled(TopBanner)`
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: ${rem(FONT_SIZES[4])};
  color: ${COLOR.white};
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 2rem;
  text-transform: none;
`;

const MinerHero = ({ onClick }) => (
  <Wrapper column>
    <StyledLogoContainer>
      <Container>
        <Logo white />
      </Container>
    </StyledLogoContainer>
    <StyledTopBanner src={banner} />
    <StyledIntro align="center">
      <Container>
        <IntroContent>
          <Heading heavy as="h1" fontSize={[9]} color="white">
            <FormattedMessage id="landing.skyware.hero.title" />
          </Heading>
          <Paragraph heavy as="h1" fontSize={[3]} color="white">
            <FormattedMessage id="landing.skyware.hero.heading" />
          </Paragraph>
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
