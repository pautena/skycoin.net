import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';
import { Flex } from 'grid-styled';

import ImageCard from 'components/ImageCard';
import {ImageFullContainer} from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import Title from './Title';
import Link from 'components/Link';
import { SPACE,COLORS } from '../../../config';

import watchNow from '../images/watch_now.png';
import videos from '../videos';

const Icon = styled.img`
  margin-right: ${rem(SPACE[3])};
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
  color:${COLORS.black} !important;
`;


const Video = ({text,icon,url})=>{
  return(
    <StyledLink href={url}>
      <StyledText><Icon src={icon}/><FormattedMessage id={text}/></StyledText>
    </StyledLink>
  );
}

const WatchNow = ()=>{
    return (
      <ImageCard flexDirection="row-reverse" image={<ImageFullContainer image={watchNow} height="300px"/>}>
        <Title id='landing.skyware.watchNow.title'/>    
        <StyledText><FormattedMessage id='landing.skyware.watchNow.description'/></StyledText>
        <YoutubeWrapper>
          {videos.map((item)=><Video text={item.text} icon={item.icon} url={item.url}/>)}
        </YoutubeWrapper>
      </ImageCard>
    )
  };

  export default WatchNow;