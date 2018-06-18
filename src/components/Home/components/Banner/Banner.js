import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Text from 'components/Text';
import Button from 'components/Button';

import media from 'utils/media';
import { COLOR, FONT_SIZES } from 'config';
import banner from './icon2.svg';

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

const Banner = () => (
  <Wrapper py={[3, 7]}>
    <Container>
      <Content>
        <img src={banner} alt="img" />
        <TextContainer>
          <StyledText color="white" my={2} mx={[0, 5]}>
            <FormattedMessage id="home.banner.heading" />
          </StyledText>
          <Text color="white" mb={2} mx={[0, 5]} fontSize={FONT_SIZES[4]}>
            <FormattedMessage id="home.banner.subheading" />
          </Text>
        </TextContainer>
        <Button target="_blank" href="https://www.skycoin.net/blog/statement/skycoin-team-status-update/" pill bg="white" color="base" my={2} mx={2}>
          <FormattedMessage id="home.banner.button" />
        </Button>
      </Content>
    </Container>
  </Wrapper>
);

export default Banner;
