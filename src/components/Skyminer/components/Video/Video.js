import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import YouTube from 'react-youtube';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Button from 'components/Button';

import { rem } from 'polished';
import { COLOR, SPACE } from 'config';
import media from 'utils/media';

const playerOptions = {
  height: '480',
  width: '854',
  playerVars: {
    rel: 0,
  },
};

const videoId1 = 'vG1QdyZzBzo';
const videoId2 = '-CbSdVIwr8E';
const videoId3 = '1F27ZWZPd8A';

const channelUrl = 'https://www.youtube.com/channel/UCzLASufel2No4vSt4rudHSQ/videos';

const Wrapper = styled(Box)`
  background: ${COLOR.lightBlue};
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  padding-bottom: 25px;
  height: 0;
  margin-top: ${rem(SPACE[5])};
  margin-bottom: ${rem(SPACE[4])};
  
  ${media.sm.css`
    margin-top: ${rem(SPACE[8])};  
  `}
  
  & > span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
  
  iframe {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const Video = () => (
  <Wrapper py={[6, 10, 13]}>
    <Container>
      <Heading heavy as="h2" fontSize={[6, 7]} color="black" mt={4}>
        <FormattedMessage id="skyminer.video.heading1" />
      </Heading>
      <VideoWrapper>
        <YouTube videoId={videoId1} opts={playerOptions} />
      </VideoWrapper>

      <Heading heavy as="h2" fontSize={[6, 7]} color="black" mt={[8, 13]}>
        <FormattedMessage id="skyminer.video.heading2" />
      </Heading>
      <VideoWrapper>
        <YouTube videoId={videoId2} opts={playerOptions} />
      </VideoWrapper>

      <Heading heavy as="h2" fontSize={[6, 7]} color="black" mt={[8, 13]}>
        <FormattedMessage id="skyminer.video.heading3" />
      </Heading>
      <VideoWrapper>
        <YouTube videoId={videoId3} opts={playerOptions} />
      </VideoWrapper>
      <Flex row justify="flex-end">
        <Button href={channelUrl} target="_blank" color="white" bg="base" pill mt={[6, 10]} >
          <FormattedMessage id="skyminer.video.more" />
        </Button>
      </Flex>
    </Container>
  </Wrapper>
);

export default Video;
