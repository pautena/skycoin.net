import React from 'react';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import {NavLink, renderMenu, StyledLink} from '../Navigation';
import Fa from "@fortawesome/react-fontawesome";
import { Flex, Box } from 'grid-styled';
import {COLOR} from "../../../config";

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

const Container = styled(Flex)`
  position: relative;
  margin-left: 2rem;
  
  &:first-child {
    margin-left: 0;
  }
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
    const background = white ? COLOR.dark : '#fff';

    const LinksContainer = styled.ul`
      position: absolute;
      min-width: 100%;
      border-top: 1px solid white;
      top: calc(100%);
      background: ${background};
      border-radius: 0 0 3px 3px;
      padding: 10px;
      margin-left: 0;
      box-shadow: 0px 2px 3px rgba(0,0,0,0.3);
      
      a {
        margin: 5px 0 5px 0;
        white-space: nowrap;
      }
    `;

    const ChildLink = styled(NavLink)`
      margin-left: 0;
    `;

    return (
      <Container
        onMouseEnter={this.handleOpen}
        onMouseLeave={this.handleClose}
        onClick={this.toggleOpen}
      >
        <StyledLink
          {...this.props}
        >
          <FormattedMessage id={menuItem.name} />
          <IconWrap>
            <Icon icon={faAngleDown} />
          </IconWrap>
        </StyledLink>
        {hovering &&
          <LinksContainer>
            {menuItem.menu.map(item => renderMenu(item, white, isMobile))}
          </LinksContainer>}
      </Container>
    );
  }
}

export default Dropdown;

