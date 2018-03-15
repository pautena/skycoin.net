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

const Header = ({ white, blueWhite, border, social, showBuy }) => (
  <Container>
    <Wrapper border={border}>
      <Flex align="center" justify="space-between" wrap>
        <Logo white={white} />
        <Navigation white={white} social={social} blueWhite={blueWhite} showBuy={showBuy} />
      </Flex>
    </Wrapper>
  </Container>
);

Header.propTypes = {
  white: PropTypes.bool,
  border: PropTypes.bool,
  social: PropTypes.bool,
  blueWhite: PropTypes.bool,
  showBuy: PropTypes.bool,
};

Header.defaultProps = {
  white: false,
  border: false,
  social: false,
  blueWhite: false,
  showBuy: true,
};

export default Header;
