import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import YouTube from 'react-youtube';
import Container from 'components/Container';

import { COLOR } from 'config';

const playerOptions = {
  height: '480',
  width: '854',
  playerVars: {
    rel: 0,
  },
};

const videoId = 'v5VdRyZe9EE';

const Wrapper = styled(Box)`
  background: ${COLOR.lightBlue};
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  padding-bottom: 25px;
  height: 0;
  
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
  <Wrapper py={[8, 10, 13]}>
    <Container>
      <VideoWrapper>
        <YouTube videoId={videoId} opts={playerOptions} />
      </VideoWrapper>
    </Container>
  </Wrapper>
);

export default Video;
