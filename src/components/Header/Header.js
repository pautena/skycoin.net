import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import { rem } from 'polished';

import Container from 'components/Container';
import Navigation from 'components/Navigation';
import Logo from 'components/Logo';

import { SPACE, COLORS } from 'config';

const Wrapper = styled.div`
  padding: ${rem(SPACE[6])} 0;
  width: 100%;
  border-bottom: ${props => (props.border ? `2px solid ${COLORS.gray[1]}` : 'none')}
`;

const Header = ({ white, border, social }) => (
  <Wrapper border={border}>
    <Container>
      <Flex align="center" justify="space-between" wrap>
        <Logo white={white} />
        <Navigation white={white} social={social} />
      </Flex>
    </Container>
  </Wrapper>
);

Header.propTypes = {
  white: PropTypes.bool,
  border: PropTypes.bool,
  social: PropTypes.bool,
};

Header.defaultProps = {
  white: false,
  border: false,
  social: false,
};

export default Header;
