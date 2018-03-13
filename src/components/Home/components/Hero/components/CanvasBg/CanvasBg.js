import React from 'react';
import styled from 'styled-components';
import createjs from 'createjs-collection';

import { COLOR } from 'config';
import media from 'utils/media';

const Wrapper = styled.div`
  background-color: ${COLOR.dark};
  position: relative;
  min-height: 33rem;
  height: auto;
  position: absolute;
  top: 0;

  ${media.sm.css`
    height: 40rem;
  `}
`;

const Canvas = styled.canvas`
  display: block; 
  background-color: ${COLOR.dark};
`;

class CanvasBg extends React.Component {

  render() {
    return (
      <Wrapper>
        <Canvas ref={(ref) => { this.canvas = ref; }} width="1400" height="710" />
      </Wrapper>
    );
  }
}

export default CanvasBg;
