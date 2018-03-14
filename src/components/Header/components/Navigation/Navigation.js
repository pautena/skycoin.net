import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';

import { SPACE, FONT_SIZES, FONT_FAMILIES, COLORS } from 'config';
import Link from 'components/Link';
import media from 'utils/media';
import telegram from './telegram.svg';
import discord from './discord.svg';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const GroupWrapper = styled.div`
  font-size: ${rem(FONT_SIZES[1])};
  padding-top: ${rem(SPACE[4])};
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  margin-left: ${rem(SPACE[4])};

  ${media.sm.css`
    font-size: ${rem(FONT_SIZES[2])};
    margin-left: ${rem(SPACE[9])};
    padding-top: 0;
    text-align: right;
  `}
  ${media.md.css`
    margin-left: ${rem(SPACE[9])};
  `}
`;

const StyledLink = styled(Link)`
  margin-left: ${rem(SPACE[2])};
  font-family: ${FONT_FAMILIES.sansBold};
  color: ${props => (props.white ? 'white' : COLORS.black)};
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  ${media.sm.css`
    margin-left: ${rem(SPACE[4])};
  `}

  ${media.md.css`
    margin-left: ${rem(SPACE[7])};
  `}
`;

const Img = styled.img.attrs({
  alt: props => props.alt || '',
})`
  height: ${props => (props.height ? rem(props.height) : rem(18))};
  padding-right: ${rem(SPACE[1])};
  max-width: 100%;
`;

const Navigation = ({ white }) => (
  <Wrapper>
    <GroupWrapper>
      <StyledLink white={white} to="/">
        <FormattedMessage id="header.navigation.home" />
      </StyledLink>

      <StyledLink white={white} href="https://www.skycoin.net/blog">
        <FormattedMessage id="header.navigation.blog" />
      </StyledLink>

      <StyledLink white={white} href="https://explorer.skycoin.net" target="_blank">
        <FormattedMessage id="header.navigation.explorer" />
      </StyledLink>

      <StyledLink white={white} to="downloads">
        <FormattedMessage id="header.navigation.wallet" />
      </StyledLink>

      <StyledLink white={white} to="team">
        <FormattedMessage id="header.navigation.team" />
      </StyledLink>

      <StyledLink white={white} to="/">
        <FormattedMessage id="header.navigation.ecosystem" />
      </StyledLink>
    </GroupWrapper>

    <GroupWrapper>
      <StyledLink white={white} to="https://t.me/Skycoin">
        <Img src={telegram} alt="Telegram" />
        <FormattedMessage id="header.navigation.telegram" />
      </StyledLink>

      <StyledLink white={white} to="/">
        <Img src={discord} alt="Discord" height={23} />
        <FormattedMessage id="header.navigation.discord" />
      </StyledLink>
    </GroupWrapper>

  </Wrapper>
);

Navigation.propTypes = {
  white: PropTypes.bool,
};

Navigation.defaultProps = {
  white: false,
};

export default Navigation;
