import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import {BUY_SKY_LINK} from "../../config";

const Wrapper = styled.div`
  display: block;
  width: 100%;
  text-align: center;
`;

const StyledLink = Button.withComponent('a');

class Buy extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { asAnchor, ...rest } = this.props;
    const Component = asAnchor ? StyledLink : Button;

    const attrs = {
      href: BUY_SKY_LINK,
    };

    return (
      <Wrapper>
        <Component {...attrs} {...rest} />
      </Wrapper>
    );
  }
}

Buy.propTypes = {
  asAnchor: PropTypes.bool,
};

Buy.defaultProps = {
  asAnchor: true,
};

export default Buy;
