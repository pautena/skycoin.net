import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Text from 'components/Text';
import Button from 'components/Button';

import media from 'utils/media';
import { COLOR, FONT_SIZES } from 'config';
import banner from './icon3.png';

const Wrapper = styled(Box)`
  background: ${COLOR.base};
  text-align: center;
`;

const StyledText = styled(Text)`
  font-size: ${FONT_SIZES[5]}px;

  ${media.md.css`
    font-size: 32px;
  `};
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
  flex-direction: column;
  align-items: center;

  ${media.md.css`
    align-items: flex-start;
  `};
`;

const StyledImg = styled.img`
  width: 102px;
  height: auto;
`;

const Banner = () => (
  <Wrapper py={[3, 6]}>
    <Container>
      <Content>
        <StyledImg src={banner} alt="img" />
        <TextContainer>
          <StyledText color="white" my={2} mx={[0, 5]}>
            <FormattedMessage id="home.banner.heading" />
          </StyledText>
        </TextContainer>
        <Button to="/gallery" pill bg="white" color="base" my={2} mx={2}>
          <FormattedMessage id="home.banner.button" />
        </Button>
      </Content>
    </Container>
  </Wrapper>
);

export default Banner;
