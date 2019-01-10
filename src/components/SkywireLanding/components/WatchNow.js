import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';
import { Flex } from 'grid-styled';

import ImageCard from 'components/ImageCard';
import { ImageFullContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import Link from 'components/Link';

import Title from './Title';
import { SPACE } from '../../../config';

import watchNow from '../images/watch_now.png';
import videos from '../videos';

const Icon = styled.img`
  margin-right: ${rem(SPACE[3])};
  width:${props => props.width}
`;

const YoutubeWrapper = styled(Flex)`
  flex-direction:column;
  padding-top:${rem(SPACE[4])};
`;

const StyledText = styled(Text)`
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-bottom:0;
  
`;

const StyledLink = styled(Link)`
  cursor:pointer;
  color:black !important;
`;


const Video = ({ text, icon, url }) =>
  (<StyledLink href={url}>
    <StyledText><Icon src={icon} width="40px" /><FormattedMessage id={text} /></StyledText>
  </StyledLink>);

Video.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const WatchNow = () => {
  const image = <ImageFullContainer image={watchNow} width={[1, 'auto', 'auto']} height="320px" />;
  return (
    <ImageCard flexDirection="row-reverse" image={image} width={['320px', '320px', 'auto']}>
      <Title id="landing.skyware.watchNow.title" />
      <StyledText><FormattedMessage id="landing.skyware.watchNow.description" /></StyledText>
      <YoutubeWrapper>
        {videos.map(item => <Video text={item.text} icon={item.icon} url={item.url} />)}
      </YoutubeWrapper>
    </ImageCard>
  );
};

export default WatchNow;
