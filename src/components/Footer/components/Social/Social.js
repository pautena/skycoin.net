import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import Link from 'components/Link';

import * as images from './images';

const socialLinks = [
  { to: 'https://medium.com/@Skycoinproject', icon: images.medium },
  { to: 'https://twitter.com/skycoinproject', icon: images.twitter },
  { to: 'https://www.facebook.com/skycoinproject', icon: images.facebook },
  { to: 'https://www.instagram.com/skycoinproject/', icon: images.instagram },
  { to: 'https://github.com/skycoin/skycoin', icon: images.github },
  { to: 'https://www.youtube.com/c/Skycoin', icon: images.youtube },
  { to: 'https://www.reddit.com/r/SkycoinProject', icon: images.reddit },
  { to: 'https://itunes.apple.com/nl/podcast/skycoin/id1348472259?l=en', icon: images.apple },
  { to: 'https://discord.gg/EgBenrW', icon: images.discord },
  { to: 'https://t.me/Skycoin', icon: images.telegram },
];

const Wrapper = styled(Flex)`
  border-top: 1px solid rgba(255, 255, 255, .12);
  border-bottom: 1px solid rgba(255, 255, 255, .12);
`;

const StyledLink = styled(Link)`
  display: inline-block;
  
  &:hover {
    opacity: .75;
  }
`;

const StyledBox = styled(Box)`
  text-align: center;
  font-size: 0;
`;

const Img = styled.img.attrs({
  alt: '',
})`
  display: block;
`;

const columnsQty = socialLinks.length;
const columnsQtySm = Math.round(socialLinks.length / 2);

const SocialItem = ({ to, icon }) => (
  <StyledBox width={[1 / columnsQtySm, 1 / columnsQty]} py={[2, 4]}>
    <StyledLink href={to} target="_blank">
      <Img src={icon} />
    </StyledLink>
  </StyledBox>
);


SocialItem.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.node,
};

SocialItem.defaultProps = {
  to: socialLinks[0].to,
  icon: socialLinks[0].icon,
};

const Social = () => (
  <Wrapper align="center" justify="space-between" wrap py={[2, 4, 6]}>
    {socialLinks.map((item, i) => <SocialItem to={item.to} icon={item.icon} key={i} />)}
  </Wrapper>
);

export default Social;
