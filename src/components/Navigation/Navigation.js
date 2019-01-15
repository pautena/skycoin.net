/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import { FormattedMessage, injectIntl } from 'react-intl';
import { rem, rgba } from 'polished';
import { withRouter, matchPath } from 'react-router-dom';
import disableScroll from 'disable-scroll';

import { SPACE, FONT_SIZES, FONT_FAMILIES, COLOR } from 'config';
import Link from 'components/Link';
import Button from 'components/Button';
import media from 'utils/media';
import telegram from './telegram.svg';
import discord from './discord.svg';
import telegramWhite from './telegramWhite.svg';
import discordWhite from './discordWhite.svg';

import menuIc from './icMenu.svg';
import menuBlueIc from './icMenuBlue.svg';
import cancelIc from './icCancel.svg';
import { BUY_SKY_LINK } from '../../config';
import Dropdown from './Components/Dropdown';

const menuBreakpoint = '1035px';

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
  top: 82px;
  right: 25px;
  cursor: pointer;
`;

const MenuOpen = ToggleButton.extend`
  background: url(${props => (props.white ? menuIc : menuBlueIc)}) 0 0 no-repeat;
`;

const Container = styled.div`
  position: ${props => (props.isMobile ? 'fixed' : 'relative')};
  top: ${props => (props.isMobile ? '0' : 'auto')};
  bottom: ${props => (props.isMobile ? '0' : 'auto')};
  right: ${props => (props.isMobile ? '-270px' : 'auto')};
  z-index: 2;

  ${media.md.css`
    position: relative;
    top: auto;
    bottom: auto;
    right: auto;
  `}
`;

const Scrollable = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background: ${props => (props.isMobile ? COLOR.white : 'transparent')};
  transform: translateX(${props => (props.menuVisible ? '-270px' : '0')});
  transition: transform 400ms ease-in-out;
  position: relative;
  top: -60px;
  padding: 60px 0 60px 0;
  
  ${media.md.css`
    top: 0;
    left: 0;
    padding: 0;
    width: auto;
    height: auto;
    background: transparent;
    transform: translateX(0);
  `};

  @media (min-width: ${menuBreakpoint}) {
    left: auto;
  };
`;

const GroupWrapper = styled.div`
  display: ${props => (props.show || props.isMobile ? 'flex' : 'none')};;
  flex-wrap: wrap;
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
  width: ${props => (props.isMobile ? 'auto' : '100%')};
  margin-top: ${props => (props.isMobile ? '0' : rem(SPACE[6]))};
  padding: ${props => (props.isMobile ? rem(28) : '0')}  0;
  font-size: ${rem(FONT_SIZES[2])};
  text-align: left;
  ${media.sm.css`
    width: auto;
    margin-top: 0;
  `};
  
  ${media.md.css`
    display: ${props => (props.show ? 'flex' : 'none')};
    flex-direction: row;
    padding: 0;
  `}
`;

const Wrapper = styled(Flex)`
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
  width: ${props => (props.isMobile ? '270px' : 'auto')};
  min-height: ${props => (props.isMobile ? '100%' : 'auto')};
  text-align: left;
  ${media.md.css`
    flex-direction: row;
    width: auto;
    height: auto;
    background: transparent;
  `}
  
  ${GroupWrapper} + ${GroupWrapper} {
    border-top: 2px solid ${rgba(COLOR.textGrey, 0.2)};

    ${media.md.css`
      border-top: none;
      margin-left: ${rem(SPACE[4])};
    `}
  }
`;

const withParentActiveProp = (Component) => {
  const C = (props) => {
    const items = props.menuItem.menu;
    const active = undefined !== items.find((item) => {
      const matched = matchPath(props.location.pathname, { path: item.to });
      return item.to && (matched != null) && matched.isExact;
    });

    return (
      <Component
        {...props}
        active={active}
      />
    );
  };

  C.propTypes = {
    menuItem: PropTypes.shape({
      menu: PropTypes.array,
      to: PropTypes.string,
      href: PropTypes.string,
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };
  C.defaultProps = {
    to: undefined,
  };


  return C;
};

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

export const LinkCSS = css`
  display: flex;
  align-items: center;
  width: ${props => (props.isMobile ? 'auto' : '33.3333%')};
  margin: 0;
  padding-top: ${props => (props.isMobile ? rem(SPACE[3]) : rem(SPACE[1]))}; 
  padding-bottom: ${props => (props.isMobile ? rem(SPACE[3]) : rem(SPACE[1]))};
  padding-left: ${props => (props.isMobile ? rem(SPACE[8]) : '0')}; 
  padding-right: ${props => (props.isMobile ? rem(SPACE[8]) : '0')};
  font-family: ${FONT_FAMILIES.sans};
  color: ${props => (props.white && !props.isMobile ? 'white' : (props.active ? COLOR.dark : COLOR.base))};
  text-decoration: none;
    
  &:hover {
    color: ${props => (props.white && !props.isMobile ? 'white' : COLOR.dark)};
    opacity: ${props => (props.white && !props.isMobile ? '.7' : '1')};
    text-decoration: none;
  }
  
  > span {
      ${media.md.css`
        display: ${props => (props.social ? 'none' : 'inline-block')};
      `}
  }
  
  ${media.sm.css`
    width: auto;
    margin-left: ${props => (props.isMobile ? '0' : rem(SPACE[7]))};
  `};
  
  ${media.md.css`
    margin-left: ${rem(SPACE[4])};
    padding: ${rem(SPACE[1])};
    border-top: 2px solid transparent;
    border-bottom: 2px solid ${props => (props.active ? COLOR.base : 'transparent')};
    color: ${props => (props.white ? 'white' : (props.active ? COLOR.dark : COLOR.base))};
    
    &:first-child {
      margin-left: 0;
    }
    
    &:hover {
      color: ${props => (props.white ? 'white' : COLOR.dark)};
      opacity: ${props => (props.white ? '.7' : '1')};
    }
  `}

  @media (min-width: ${menuBreakpoint}) {
    margin-left: ${rem(SPACE[7])};
  };
`;

export const NavLink = styled(Link)`
  ${LinkCSS}
`;

export const StyledLink = withRouter(withActiveProp(NavLink));

const Img = styled.img.attrs({
  alt: props => props.alt || '',
}) `
  height: auto;
  margin-right: ${rem(SPACE[2])};
  width: 23px;
  ${media.md.css`
    margin-right: ${props => (props.social ? rem(SPACE[2]) : 0)};
  `}
`;

const Icon = styled.i`
  width: 23px;
  height: 23px;
  margin-right: ${rem(SPACE[2])};
  background-image: url(${props => props.srcXs});
  background-position: center center;
  background-repeat: no-repeat;
  
  ${media.sm.css`
    background-image: url(${props => props.src});
  `}
`;

const Overlay = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: -60px;
  padding-top: 60px;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${rgba(COLOR.textDark, 0.5)};
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: opacity 400ms linear;
  z-index: 1;

  ${media.md.css`
    display: none;
  `}
`;

const NavWrapper = styled.div`
  width: ${props => (props.isMobile ? 'auto' : '100%')};
  
  ${media.sm.css`
    width: auto;
  `}
`;

export const RouteredDropdown = withRouter(withParentActiveProp(Dropdown));

export const renderMenu = (menuItem, white, isMobile, index = 0) => {
  if (menuItem.to) {
    return (<StyledLink key={index} white={white} isMobile={isMobile} to={menuItem.to}>
      <FormattedMessage id={menuItem.name} />
    </StyledLink>);
  } else if (menuItem.href) {
    return (<StyledLink key={index} white={white} isMobile={isMobile} href={menuItem.href} target="_blank">
      <FormattedMessage id={menuItem.name} />
    </StyledLink>);
  }
  return (
    <RouteredDropdown key={index} menuItem={menuItem} white={white} isMobile={isMobile} />
  );
};

function getMenu(intl) {
  const linkSuffix = intl.locale !== intl.defaultLocale ? intl.locale : '';
  return [
    {
      name: 'header.navigation.downloads',
      to: '/downloads',
    },
    {
      name: 'header.navigation.ecosystem',
      menu: [
        {
          name: 'header.navigation.ecosystem_overview',
          to: '/ecosystem',
        },
        {
          name: 'header.navigation.skywire',
          to: '/skywire',
        },
        {
          name: 'header.navigation.obelisk',
          to: '/obelisk',
        },
        {
          name: 'header.navigation.fiber',
          to: '/fiber',
        },
        {
          name: 'header.navigation.cx',
          to: '/cx',
        },
        {
          name: 'header.navigation.cxo',
          to: '/cxo',
        },
      ],
    },
    {
      name: 'header.navigation.skyminer',
      to: '/skyminer',
    },
    {
      name: 'header.navigation.blog',
      href: `https://www.skycoin.net/blog/${linkSuffix}`,
    },
    {
      name: 'header.navigation.store',
      menu: [
        {
          name: 'header.navigation.hardwareStore',
          href: 'https://store.skycoin.net/',
        },
        {
          name: 'header.navigation.merchandise',
          href: 'https://merch.skycoin.net/',
        },
      ],
    },
    {
      name: 'header.navigation.other',
      menu: [
        {
          name: 'header.navigation.team',
          to: '/team',
        },
        {
          name: 'header.navigation.gallery',
          to: '/gallery',
        },
        {
          name: 'header.navigation.jobs',
          to: '/jobs',
        },
        {
          name: 'header.navigation.explorer',
          href: 'https://explorer.skycoin.net',
        },
        {
          name: 'header.navigation.explorerApi',
          href: 'https://explorer.skycoin.net/api.html',
        },
      ],
    },
  ];
}

class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    document.body.style.minHeight = '100%';
    document.body.style.height = '100%';
  }

  componentWillUnmount() {
    disableScroll.off();
  }

  toggleMenu() {
    const { menuVisible } = this.state;

    document.body.style.overflowY = menuVisible ? 'auto' : 'hidden';
    document.body.style.position = menuVisible ? 'static' : 'relative';
    document.body.style.minHeight = menuVisible ? '100%' : '0';
    document.body.style.height = menuVisible ? '100%' : 'calc(100vh - 70px)';

    this.setState({ menuVisible: !menuVisible });
  }

  render() {
    const { white, social, showBuy, showNav, isMobile, socialWhite, intl } = this.props;
    const { menuVisible } = this.state;

    return (
      <NavWrapper isMobile={isMobile}>
        {isMobile && <MenuOpen onClick={this.toggleMenu} white={white} />}
        <Overlay visible={menuVisible} />
        <Container isMobile={isMobile}>
          <Scrollable menuVisible={menuVisible} isMobile={isMobile}>
            <Wrapper wrap isMobile={isMobile}>
              {isMobile && <MenuClose onClick={this.toggleMenu} />}
              {showNav &&
                <GroupWrapper isMobile={isMobile} show>
                  {getMenu(intl).map((item, index) => renderMenu(item, white, isMobile, index))}
                </GroupWrapper>
              }

              <GroupWrapper isMobile={isMobile} show={social}>
                <StyledLink white={white} icon={telegram} isMobile={isMobile} social={social} href="https://t.me/Skycoin" target="_blank">
                  {socialWhite && <Icon srcXs={telegram} src={telegramWhite} />}
                  {!socialWhite && <Img src={telegram} alt="Telegram" />}
                  <FormattedMessage id="header.navigation.telegram" />
                </StyledLink>

                <StyledLink white={white} isMobile={isMobile} social={social} href="https://discord.gg/EgBenrW" target="_blank">
                  {socialWhite && <Icon srcXs={discord} src={discordWhite} />}
                  {!socialWhite && <Img src={discord} alt="Discord" />}
                  <FormattedMessage id="header.navigation.discord" />
                </StyledLink>
              </GroupWrapper>
              <GroupWrapper isMobile={isMobile} show={showBuy}>
                <Button to={BUY_SKY_LINK} color="white" bg="base" pill ml={[7, 0, 0]} mr={[7, 7, 0]}>
                  <FormattedMessage id="header.navigation.getWallet" />
                </Button>
              </GroupWrapper>
            </Wrapper>
          </Scrollable>
        </Container>
      </NavWrapper>
    );
  }
}

Navigation.propTypes = {
  white: PropTypes.bool,
  social: PropTypes.bool,
  showBuy: PropTypes.bool,
  showNav: PropTypes.bool,
  isMobile: PropTypes.bool,
  socialWhite: PropTypes.bool,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

Navigation.defaultProps = {
  white: false,
  social: false,
  showBuy: false,
  showNav: true,
  mobile: false,
  socialWhite: false,
};

export default injectIntl(Navigation);
