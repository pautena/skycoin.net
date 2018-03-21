import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import media from 'utils/media';
import { rem } from 'polished';
import { COLOR, FONT_FAMILIES } from 'config';

import Heading from 'components/Heading';
import Link from 'components/Link';
import notFound from './images/404.svg';

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  padding-top: ${rem(100)};
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  width:100%;
  height: 100vh;
  padding-left: ${rem(50)};

  ${media.md.css`
    padding-left: ${rem(300)};
    background-image: url(${notFound});
    background-repeat: no-repeat;
    background-position: 60% 25%;
    background-size: auto;
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

const Message = styled.div`
  text-align: left;
  font-size: 15;
  width: ${rem(260)};
  color=${COLOR.black};
  margin-bottom: ${rem(20)};
  font-family: ${FONT_FAMILIES.sans};
`;

const NotFound = ({ intl }) => (
  <Wrapper>
    <Helmet>
      <title>{intl.formatMessage({ id: 'notFound.title' })}</title>
    </Helmet>

    <MessageContainer>
      <Heading heavy fontSize={[100, 140]} color="base" mb={[0]}>
        <FormattedMessage id="notFound.404" />
      </Heading>

      <Heading heavy as="h1" fontSize={[36, 36]} color="black" mb={[5]}>
        <FormattedMessage id="notFound.heading" />
      </Heading>

      <Message>
        <FormattedHTMLMessage id="notFound.message" />
      </Message>

      <StyledLink to="/">
        <FormattedMessage id="notFound.home" />
      </StyledLink>
    </MessageContainer>
  </Wrapper>
);

NotFound.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(NotFound);
