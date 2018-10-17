import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Text from 'components/Text';
import Heading from 'components/Heading';
import Button from 'components/Button';

import media from 'utils/media';
import { COLOR, FONT_SIZES } from 'config';
import banner from './banner.png';

const Wrapper = styled(Box)`
  background: ${COLOR.base};
  text-align: center;
`;

const Content = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${media.md.css`
    flex-direction: row;
  `};
`;

const TextContainer = styled(Flex)`
  // flex-direction: column;
  // align-items: center;

  ${media.md.css`
    // align-items: flex-start;
    width: 40%;
  `};
`;

const StyledText = styled(Heading)`
  text-align: center;

  ${media.md.css`
    text-align: left;
  `};
`;

const ImgContainer = styled.div`
  display: none;
  flex-grow: 1;
  text-align: left;
  
  ${media.md.css`
    display: block;
    width: 40%;
  `}
`;
const StyledImg = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

const StyledButton = styled(Button)`
  white-space: nowrap;
`;


const Banner = () => (
  <Wrapper py={0}>
    <Container>
      <Content>
        <TextContainer>
          <StyledText as="p" heavy fontSize={[5, 5, 7]} color="white" m={0} lineHeight="1.2">
            <FormattedMessage id="home.banner.heading" />
          </StyledText>
        </TextContainer>
        <ImgContainer>
          <StyledImg src={banner} alt="img" />
        </ImgContainer>
        <StyledButton to="/gallery" pill bg="white" color="base" my={2} mx={2}>
          <FormattedMessage id="home.banner.button" />
        </StyledButton>
      </Content>
    </Container>
  </Wrapper>
);

export default Banner;
