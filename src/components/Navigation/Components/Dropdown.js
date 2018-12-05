import React from 'react';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import {NavLink, StyledLink} from '../Navigation';
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
    const { links, white } = this.props;
    const { hovering } = this.state;
    const background = white ? COLOR.dark : '#fff';

    const LinksContainer = styled.div`
      position: absolute;
      width: 100%;
      border-top: 1px solid white;
      top: calc(100% + 1px);
      background: ${background};
      border-radius: 0 0 3px 3px;
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
          <FormattedMessage id="header.navigation.downloads" />
          <IconWrap>
            <Icon icon={faAngleDown} />
          </IconWrap>
        </StyledLink>
        {hovering &&
          <LinksContainer>
            {links.map(link => <ChildLink white={white}>{link}</ChildLink>)}
          </LinksContainer>}
      </Container>
    );
  }
}

export default Dropdown;

