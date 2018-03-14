import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

const Wrapper = styled.div`
  display: inline;
`;

class Buy extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { asAnchor, ...rest } = this.props;
    const Component = asAnchor ? 'a' : Button;

    const props = {
      to: 'markets',
    };

    return (
      <Wrapper>
        <Component {...props} {...rest} />
      </Wrapper>
    );
  }
}

Buy.propTypes = {
  asAnchor: PropTypes.bool,
};

Buy.defaultProps = {
  asAnchor: false,
};

export default Buy;
