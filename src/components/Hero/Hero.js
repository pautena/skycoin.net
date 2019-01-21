import React from 'react';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Container from 'components/Container';
import Logo from 'components/Logo';
import Heading from 'components/Heading';
import Button from 'components/Button';
import media from 'utils/media';
import { FONT_FAMILIES, COLOR, FONT_SIZES } from 'config';


const Wrapper = styled(Flex)`

  position: relative;
  height: 550px;
  box-sizing: border-box;
  background: ${COLOR.base} url(${props => props.banner}) no-repeat right bottom;
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


const Paragraph = styled.p`
  font-size: ${rem(FONT_SIZES[4])};
  color: ${COLOR.white};
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 2rem;
  text-transform: none;
`;

const StyledButton = styled(Button)`
  border-radius:5px;
`;

const Hero = ({ title, description, buttonText, banner, to }) => (
  <Wrapper column banner={banner}>
    <StyledLogoContainer>
      <Container>
        <Logo white />
      </Container>
    </StyledLogoContainer>
    <StyledIntro align="center">
      <Container>
        <IntroContent>
          <Heading heavy as="h1" fontSize={[9]} color="white">
            <FormattedMessage id={title} />
          </Heading>
          <Paragraph heavy as="h1" fontSize={[3]} color="white">
            <FormattedMessage id={description} />
          </Paragraph>
          <StyledButton big color="#fff" bg="#000" width={['auto']} mt={5} to={to}>
            <FormattedMessage id={buttonText} />
          </StyledButton>
        </IntroContent>
      </Container>
    </StyledIntro>
  </Wrapper>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  banner: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
};

export default Hero;
