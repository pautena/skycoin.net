import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Text from 'components/Text';
import Button from 'components/Button';

import media from 'utils/media';
import { COLOR } from 'config';
import banner from './banner.png';

const Wrapper = styled(Box)`
  ${media.md.css`
    min-height: auto;
    align-items: flex-end;
  `};
  
  background: ${COLOR.white};
  text-align: center;
  display: flex;
  align-items: center;
  min-height: 110px;
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

`;

const StyledText = styled(Text)`
  text-align: center;

  ${media.md.css`
    text-align: left;
  `};
`;

const ImgContainer = styled.div`
  display: none;
  flex-grow: 1;
  text-align: left;
  padding: 0 15px 0 15px;
  
  ${media.md.css`
    display: block;
    flex: 1;
  `}
`;
const StyledImg = styled.img`
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  white-space: nowrap;
`;


const BannerStore = () => (
  <Wrapper py={0}>
    <Container>
      <Content>
        <TextContainer>
          <StyledText as="p" heavy fontSize={[5, 5, 7]} color={COLOR.base} m={0} lineHeight="1.2">
            <FormattedMessage id="home.bannerStore.heading" />
          </StyledText>
        </TextContainer>
        <ImgContainer>
          <StyledImg src={banner} alt="img" />
        </ImgContainer>
        <StyledButton href={'https://store.skycoin.net/'} target="_blank" pill bg={COLOR.base} color={COLOR.white} my={2} mx={2}>
          <FormattedMessage id="home.bannerStore.button" />
        </StyledButton>
      </Content>
    </Container>
  </Wrapper>
);

export default BannerStore;
