import React from 'react';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import {LinkCSS, NavLink, renderMenu, StyledLink} from '../Navigation';
import Fa from "@fortawesome/react-fontawesome";
import { Flex, Box } from 'grid-styled';
import { SPACE, FONT_SIZES, FONT_FAMILIES, COLOR } from 'config';
import { rem, rgba } from 'polished';
import media from '../../../utils/media';

const menuBreakpoint = '1035px';

const IconWrap = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-left: 7px;
  min-width: 10px;
`;

const IconStyle = {
  fontSize: '14px',
  zIndex: 2,
};

const LinksContainer = styled.ul`
  position: absolute;
  min-width: 100%;
  border-top: 1px solid white;
  top: calc(100%);
  background: white;
  
  ${media.sm.css`
    background: ${props => (props.white ? COLOR.dark : '#fff')};
  `};
  
  border-radius: 0 0 3px 3px;
  padding: 10px;
  box-shadow: 0px 2px 3px rgba(0,0,0,0.3);
  margin-left: 0;
  
  a {
    margin: 5px 0 5px 0;
    white-space: nowrap;
    padding: 0;
  }
`;

const Container = styled(Flex)`
  position: relative;
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
  `};
  
  @media (min-width: ${menuBreakpoint}) {
    margin-left: ${rem(SPACE[7])};
  };
`;

export const Icon = props => <Fa icon={props.icon} style={IconStyle} />;

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      hovering: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  handleOpen() {
    this.setState({
      hovering: true,
    });
  }

  handleClose() {
    this.setState({
      hovering: false,
    });
  }

  toggleOpen() {
    this.setState({
      hovering: !this.state.hovering,
    });
  }

  render() {
    const { isMobile, white, menuItem } = this.props;
    const { hovering } = this.state;
    const DropdownLink = styled(StyledLink)`
      padding: 0;
    `;

    return (
      <Container
        {...this.props}
        onMouseEnter={this.handleOpen}
        onMouseLeave={this.handleClose}
        onClick={this.toggleOpen}
      >
        <DropdownLink
          {...this.props}
        >
          <FormattedMessage id={menuItem.name} />
          <IconWrap>
            <Icon icon={faAngleDown} />
          </IconWrap>
        </DropdownLink>
        {hovering &&
          <LinksContainer
            {...this.props}
          >
            {menuItem.menu.map(item => renderMenu(item, white, isMobile))}
          </LinksContainer>}
      </Container>
    );
  }
}

export default Dropdown;

