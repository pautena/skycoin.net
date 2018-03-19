import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { rem, rgba } from 'polished';
import { withRouter, matchPath } from 'react-router-dom';

import { SPACE, FONT_SIZES, FONT_FAMILIES, COLOR, BOX_SHADOWS } from 'config';
import Link from 'components/Link';
import Button from 'components/Button';
import media from 'utils/media';
import telegram from './telegram.svg';
import discord from './discord.svg';

import menuIc from './icMenu.svg';
import menuBlueIc from './icMenuBlue.svg';
import cancelIc from './icCancel.svg';

const ToggleButton = styled.button`
  height: 30px;
  width: 30px;
  padding: 0;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
  
  ${media.md.css`
    display: none;
  `}
`;

const MenuClose = ToggleButton.extend`
  background: url(${cancelIc}) 0 0 no-repeat;
  position: absolute;
  top: 26px;
  right: 26px;
  cursor: pointer;
`;

const MenuOpen = ToggleButton.extend`
  background: url(${props => (props.white ? menuIc : menuBlueIc)}) 0 0 no-repeat;
`;

const Container = styled.div`
  position: ${props => (props.isMobile ? 'fixed' : 'relative')};
  top: ${props => (props.isMobile ? '0' : 'auto')};
  bottom: ${props => (props.isMobile ? '0' : 'auto')};
  right: ${props => (props.isMobile ? '-280px' : 'auto')};
  z-index: 1;
  
  ${media.md.css`
    position: relative;
    top: auto;
    bottom: auto;
    right: auto;
  `}
`;

const GroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
  padding: ${props => (props.isMobile ? rem(SPACE[5]) : '0')}  0;
  font-size: ${rem(FONT_SIZES[2])};
  text-align: left;
  
  ${media.md.css`
    flex-direction: row;
    padding: 0;
  `}
`;

const Wrapper = styled(Flex)`
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
  width: ${props => (props.isMobile ? '270px' : 'auto')};
  height: ${props => (props.isMobile ? '100%' : 'auto')};
  background: ${props => (props.isMobile ? COLOR.white : 'transparent')};
  box-shadow: ${props => (props.isMobile ? BOX_SHADOWS.menu : 'none')};
  transform: translateX(${props => (props.menuVisible ? '-280px' : '0')});
  transition: transform 400ms ease-in-out;
  text-align: left;
  
  ${GroupWrapper} + ${GroupWrapper} {
    border-top: 2px solid ${rgba(COLOR.textGrey, 0.2)};  
    
    ${media.md.css`
      border-top: none;
      margin-left: ${rem(SPACE[4])};
    `}
  }

  ${media.md.css`
    flex-direction: row;
    width: auto;
    height: auto;
    background: transparent;
    box-shadow: none;
    transform: translateX(0);
  `}
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
  display: flex;
  align-items: center;
  margin: 0;
  margin-left: ${props => (props.isMobile ? '0' : rem(SPACE[7]))};
  padding-top: ${props => (props.isMobile ? rem(SPACE[3]) : rem(SPACE[1]))}; 
  padding-bottom: ${props => (props.isMobile ? rem(SPACE[3]) : rem(SPACE[1]))};
  padding-left: ${props => (props.isMobile ? rem(SPACE[7]) : rem(SPACE[1]))}; 
  padding-right: ${props => (props.isMobile ? rem(SPACE[7]) : rem(SPACE[1]))};
  font-family: ${FONT_FAMILIES.sans};
  color: ${props => (props.white && !props.isMobile ? 'white' : (props.active ? COLOR.dark : COLOR.base))};
  text-decoration: none;  
  
  &:hover {
    color: ${props => (props.white && !props.isMobile ? 'white' : COLOR.dark)};
    opacity: ${props => (props.white && !props.isMobile ? '.7' : '1')};
    text-decoration: none;
  }
  
  ${media.md.css`
    margin-left: ${rem(SPACE[7])};
    padding: ${rem(SPACE[1])};
    border-top: 2px solid transparent;
    border-bottom: 2px solid ${props => (props.active ? COLOR.base : 'transparent')};
    color: ${props => (props.white ? 'white' : (props.active ? COLOR.dark : COLOR.base))};
  `}
`));

const Img = styled.img.attrs({
  alt: props => props.alt || '',
})`
  height: auto;
  margin-right: ${rem(SPACE[2])};
  width: 23px;
`;

class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { menuVisible } = this.state;
    this.setState({ menuVisible: !menuVisible });
  }

  render() {
    const { white, social, showBuy, isMobile } = this.props;
    const { menuVisible } = this.state;
    return (
      <div>
        {isMobile && <MenuOpen onClick={this.toggleMenu} white={white} />}
        <Container isMobile={isMobile}>
          <Wrapper wrap menuVisible={menuVisible} isMobile={isMobile}>
            {isMobile && <MenuClose onClick={this.toggleMenu} />}
            <GroupWrapper isMobile={isMobile}>
              <StyledLink white={white} isMobile={isMobile} href="https://www.skycoin.net/blog">
                <FormattedMessage id="header.navigation.blog" />
              </StyledLink>

              <StyledLink white={white} isMobile={isMobile} href="https://explorer.skycoin.net" target="_blank">
                <FormattedMessage id="header.navigation.explorer" />
              </StyledLink>

              <StyledLink white={white} isMobile={isMobile} to="/downloads">
                <FormattedMessage id="header.navigation.wallet" />
              </StyledLink>

              <StyledLink white={white} isMobile={isMobile} to="/team">
                <FormattedMessage id="header.navigation.team" />
              </StyledLink>

              <StyledLink white={white} isMobile={isMobile} to="/ecosystem">
                <FormattedMessage id="header.navigation.ecosystem" />
              </StyledLink>
            </GroupWrapper>

            {showBuy &&
            <GroupWrapper isMobile={isMobile}>
              <Button to="downloads" color="white" bg="base" pill ml={[7, 0, 0]} mr={[7, 7, 0]}>
                <FormattedMessage id="header.navigation.getWallet" />
              </Button>
            </GroupWrapper>
            }

            {social &&
            <GroupWrapper isMobile={isMobile}>
              <StyledLink white={white} isMobile={isMobile} href="https://t.me/Skycoin" target="_blank">
                <Img src={telegram} alt="Telegram" />
                <FormattedMessage id="header.navigation.telegram" />
              </StyledLink>

              <StyledLink white={white} isMobile={isMobile} href="https://discordapp.com" target="_blank">
                <Img src={discord} alt="Discord" />
                <FormattedMessage id="header.navigation.discord" />
              </StyledLink>
            </GroupWrapper>
            }
          </Wrapper>
        </Container>
      </div>
    );
  }
}

Navigation.propTypes = {
  white: PropTypes.bool,
  social: PropTypes.bool,
  showBuy: PropTypes.bool,
  isMobile: PropTypes.bool,
};

Navigation.defaultProps = {
  white: false,
  social: false,
  showBuy: false,
  isMobile: true,
};

export default Navigation;
