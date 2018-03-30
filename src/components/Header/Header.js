import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import { rem } from 'polished';
import media from 'utils/media';

import Container from 'components/Container';
import Navigation from 'components/Navigation';
import Logo from 'components/Logo';

import { SPACE, COLORS } from 'config';

const Wrapper = styled.div`
  padding: ${rem(SPACE[7])} 0;
  width: 100%;
  border-bottom: ${props => (props.border ? `2px solid ${COLORS.gray[1]}` : 'none')}
  
  ${media.sm.css`
    padding: ${rem(SPACE[6])} 0;
  `}
`;

const Header = ({ white, blueWhite, border, social, showBuy, showNav }) => (
  <Container>
    <Wrapper border={border}>
      <Flex align="center" justify="space-between" wrap>
        <Logo white={white} />
        <Navigation
          white={white}
          social={social}
          blueWhite={blueWhite}
          showBuy={showBuy}
          showNav={showNav}
          isMobile
        />
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
  showNav: PropTypes.bool,
};

Header.defaultProps = {
  white: false,
  border: false,
  social: false,
  blueWhite: false,
  showBuy: true,
  showNav: true,
};

export default Header;
