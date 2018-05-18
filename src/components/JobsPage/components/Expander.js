import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { rem } from 'polished';
import media from 'utils/media';

import Text from 'components/Text';
import { FONT_SIZES } from 'config';
import ArrowIcon from './expander.svg';

const Title = styled(Text) `
  font-family: SkycoinSansBold, sans-serif;
  font-size: ${rem(FONT_SIZES[3])};
  border-top: 1px solid #92A4BA;
  border-bottom: ${props => (props.last ? '1px' : 0)} solid #92A4BA;
  padding: 20px 18px 20px 0;
  margin-bottom: 0;

  ${media.md.css`
    font-size: ${rem(FONT_SIZES[5])};  
    padding: 30px 0;
  `}
`;
const A = styled.a`
  display: block;
  position: relative;
  font-family: SkycoinSans, sans-serif;
  cursor: pointer; 
  text-decoration: none;
`;
const Arrow = styled.img`
  position: absolute;
  right: 0;
  top: 28px;
  margin-left: 12px;
  & path {
    fill: #0072FF;
  }
  transform: rotate(${props => (props.dir === 'down' ? '180deg ' : '0deg')});
  width: 13px;
  height: 13px;

  ${media.md.css`
    top: 38px;
    width: 16px;
    height: 16px;
  `}
`;

export default class Expander extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: props.collapsed || false,
    };
    this.toggleExpander = this.toggleExpander.bind(this);
  }
  toggleExpander() {
    this.setState({ ...this.state, collapsed: !this.state.collapsed });
  }
  render() {
    const { children, title } = this.props;
    const { collapsed } = this.state;
    return (
      <div>
        {collapsed && <A
          onClick={() => this.toggleExpander()}
        >
          <Title>
            {title} <Arrow dir="up" src={ArrowIcon} />
          </Title>
          <div>{children}</div>
        </A>}
        {!collapsed && <A
          onClick={() => this.toggleExpander()}
        >
          <Title color="#0072FF">
            {title} <Arrow dir="down" src={ArrowIcon} />
          </Title>

        </A>}
      </div>);
  }
}

Expander.propTypes = {
  children: PropTypes.element.isRequired,
  collapsed: PropTypes.bool,
};
