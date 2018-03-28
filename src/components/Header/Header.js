import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import { rem } from 'polished';
import media from 'utils/media';

<<<<<<< HEAD
import Container from 'components/Container';
import Navigation from 'components/Navigation';
import Logo from 'components/Logo';

import { SPACE, COLORS } from 'config';
=======
import { SPACE, COLORS } from 'config';
import Container from '../Container';
import Logo from '../Logo';
import Navigation from './components/Navigation';
>>>>>>> master

const Wrapper = styled.div`
  padding: ${rem(SPACE[7])} 0;
  width: 100%;
  border-bottom: ${props => (props.border ? `2px solid ${COLORS.gray[1]}` : 'none')}
<<<<<<< HEAD
  
  ${media.sm.css`
    padding: ${rem(SPACE[6])} 0;
  `}
`;

const Header = ({ white, blueWhite, border, social, showBuy }) => (
  <Container>
    <Wrapper border={border}>
      <Flex align="center" justify="space-between" wrap>
        <Logo white={white} />
        <Navigation
          white={white}
          social={social}
          blueWhite={blueWhite}
          showBuy={showBuy}
          isMobile
        />
      </Flex>
    </Wrapper>
  </Container>
=======
`;

const Header = ({ white, border }) => (
  <Wrapper border={border}>
    <Container>
      <Flex align="center" wrap>
        <Box width={[1 / 1, 1 / 4]}>
          <Logo white={white} />
        </Box>

        <Box width={[1 / 1, 3 / 4]}>
          <Navigation white={white} />
        </Box>
      </Flex>
    </Container>
  </Wrapper>
>>>>>>> master
);

Header.propTypes = {
  white: PropTypes.bool,
  border: PropTypes.bool,
<<<<<<< HEAD
  social: PropTypes.bool,
  blueWhite: PropTypes.bool,
  showBuy: PropTypes.bool,
=======
>>>>>>> master
};

Header.defaultProps = {
  white: false,
  border: false,
<<<<<<< HEAD
  social: false,
  blueWhite: false,
  showBuy: true,
=======
>>>>>>> master
};

export default Header;
