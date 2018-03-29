import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { Helmet } from 'react-helmet';
import media from 'utils/media';
import { rem } from 'polished';
import { COLOR, FONT_FAMILIES } from 'config';

import Container from 'components/Container';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Link from 'components/Link';
import notFound from './images/404.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Page = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const Content = styled(Flex)`
  position: relative;
`;

const ImageWrapper = styled.div`
  display: none;
  padding-left: 150px;
  max-width: 100%;
  
  ${media.sm.css`
    display: block;
  `}
`;

const Graphic = styled.img`
  display: block;
  max-width: 100%;
  
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: ${rem(280)};

  ${media.sm.css`
    position: absolute;
    top: -25px;
    left: 0;
  `}
`;

const StyledLink = styled(Link)`
  color: ${COLOR.base};
  text-decoration: none; 
  font-size: 15;
  font-family: ${FONT_FAMILIES.sans};

  &:hover {
    text-decoration: none;
  }
`;

const NotFound = ({ intl }) => (
  <Wrapper>
    <Helmet>
      <title>{intl.formatMessage({ id: 'notFound.title' })}</title>
    </Helmet>

    <Header border />
    <Page>
      <Container>
        <Content align="flex-start" justify="center">
          <MessageContainer>
            <Heading heavy fontSize={[100, 100, 140]} color="base" mb={0} lineHeight="1">
              <FormattedMessage id="notFound.404" />
            </Heading>

            <Heading heavy as="h1" fontSize={[32, 32, 36]} color="black" mb={5}>
              <FormattedMessage id="notFound.heading" />
            </Heading>

            <Text fontSize={3} textAlign="left" color={COLOR.darkGrey} mb={5}>
              <FormattedHTMLMessage id="notFound.message" />
            </Text>

            <StyledLink to="/">
              <FormattedMessage id="notFound.home" />
            </StyledLink>
          </MessageContainer>
          <ImageWrapper>
            <Graphic src={notFound} alt="" />
          </ImageWrapper>
        </Content>
      </Container>
    </Page>

  </Wrapper>
);

NotFound.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(NotFound);
