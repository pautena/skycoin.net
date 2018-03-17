import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';
import { withRouter, matchPath } from 'react-router-dom';

import { SPACE, FONT_SIZES, FONT_FAMILIES, COLOR } from 'config';
import Link from 'components/Link';
import Button from 'components/Button';
import media from 'utils/media';
import telegram from './telegram.svg';
import discord from './discord.svg';

const GroupWrapper = styled.div`
  font-size: ${rem(FONT_SIZES[1])};
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  align-items: center;  

  ${media.sm.css`
    font-size: ${rem(FONT_SIZES[2])};
    text-align: right;
  `}
`;

const Wrapper = styled(Flex)`
  font-size: ${rem(FONT_SIZES[1])};
  text-align: center;

  ${media.sm.css`
    font-size: ${rem(FONT_SIZES[2])};
    text-align: right;
  `}
  
  ${GroupWrapper} + ${GroupWrapper} {
    margin-left: ${rem(SPACE[4])};
    
    ${media.sm.css`
      margin-left: ${rem(SPACE[7])};      
    `}
  }
`;

const withActiveProp = (Component) => {
  const C = (props) => {
    const matched = matchPath(props.location.pathname, { path: props.to });
    const active = props.to && (matched != null) && matched.isExact;
    return (
      <Component
        {...props}
        active={active}
      />
    );
  };

  C.displayName = `withActiveProp(${Component.displayName || Component.name})`;
  C.WrappedComponent = Component;
  C.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    to: PropTypes.string,
  };
  C.defaultProps = {
    to: undefined,
  };

  return C;
};

/* eslint-disable no-nested-ternary */
const StyledLink = withRouter(withActiveProp(styled(Link)`
  margin-left: ${rem(SPACE[1])};
  padding: ${rem(SPACE[1])};
  font-family: ${FONT_FAMILIES.sans};
  color: ${props => (props.white
                        ? 'white'
                        : (props.active
                            ? COLOR.dark
                            : COLOR.base))};
  text-decoration: none;
  display: flex;
  align-items: center;
  border-top: 2px solid transparent;
  border-bottom: 2px solid ${props => (props.active ? COLOR.base : 'transparent')};

  &:hover {
    color: ${props => (props.white ? 'white' : COLOR.dark)};
    opacity: ${props => (props.white ? '.7' : '1')};
    text-decoration: none;
  }

  ${media.sm.css`
    margin-left: ${rem(SPACE[4])};
  `}

  ${media.md.css`
    margin-left: ${rem(SPACE[7])};
  `}
`));

const Img = styled.img.attrs({
  alt: props => props.alt || '',
})`
  height: ${props => (props.height ? rem(props.height) : rem(18))};
  padding-right: ${rem(SPACE[1])};
  max-width: 100%;
`;

const Navigation = ({ white, social, showBuy }) => (
  <Wrapper align="center" wrap mt={[5, 5, 0]}>
    <GroupWrapper>
      <StyledLink white={white} href="https://www.skycoin.net/blog">
        <FormattedMessage id="header.navigation.blog" />
      </StyledLink>

      <StyledLink white={white} href="https://explorer.skycoin.net" target="_blank">
        <FormattedMessage id="header.navigation.explorer" />
      </StyledLink>

      <StyledLink white={white} to="/downloads">
        <FormattedMessage id="header.navigation.wallet" />
      </StyledLink>

      <StyledLink white={white} to="/team">
        <FormattedMessage id="header.navigation.team" />
      </StyledLink>

      <StyledLink white={white} to="/ecosystem">
        <FormattedMessage id="header.navigation.ecosystem" />
      </StyledLink>
      {showBuy &&
      <Button to="downloads" color="white" bg="base" pill ml={[2, 4, 7]}>
        <FormattedMessage id="header.navigation.getWallet" />
      </Button>
      }
    </GroupWrapper>
    {social &&
    <GroupWrapper>
      <StyledLink white={white} href="https://t.me/Skycoin" target="_blank">
        <Img src={telegram} alt="Telegram" />
        <FormattedMessage id="header.navigation.telegram" />
      </StyledLink>

      <StyledLink white={white} href="https://discordapp.com" target="_blank">
        <Img src={discord} alt="Discord" height={23} />
        <FormattedMessage id="header.navigation.discord" />
      </StyledLink>
    </GroupWrapper>
    }
  </Wrapper>
);

Navigation.propTypes = {
  white: PropTypes.bool,
  social: PropTypes.bool,
  showBuy: PropTypes.bool,
};

Navigation.defaultProps = {
  white: false,
  social: false,
  showBuy: false,
};

export default Navigation;
