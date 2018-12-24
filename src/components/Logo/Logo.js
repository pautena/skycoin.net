import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { SPACE } from 'config';
import media from 'utils/media';
import Link from 'components/Link';
import logo from './logo.svg';
import logoWhite from './logoWhite.svg';
import logoBlueWhite from './logoBlueWhite.svg';

const StyledLink = styled(Link)`
  display: flex;
  flex: 1;
  margin-right: ${rem(SPACE[5])}
`;

const Img = styled.img.attrs({
  alt: 'Skycoin',
})`
  display: block;
  height: ${props => (props.white || !props.blueWhite ? rem(33) : rem(38))};
  max-width: 100%;
  
  ${media.md.css`
    height: ${rem(38)};
  `}
  
  ${media.lg.css`
    height: ${props => (props.white ? rem(49) : rem(38))};
  `}
`;

const getLogoSrc = (props) => {
  if (props.white) {
    return logoWhite;
  } else if (props.blueWhite) {
    return logoBlueWhite;
  }
  return logo;
};

const Logo = props => (
  <StyledLink to="/">
    <Img {...props} src={getLogoSrc(props)} />
  </StyledLink>
);

Logo.propTypes = {
  white: PropTypes.bool,
  blueWhite: PropTypes.bool,
};

Logo.defaultProps = {
  white: false,
  blueWhite: false,
};

export default Logo;
