import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

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
      href: 'https://exchange.skycoin.net/',
      target: '_blank',
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
