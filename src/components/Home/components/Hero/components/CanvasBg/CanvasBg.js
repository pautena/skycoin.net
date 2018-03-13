import React from 'react';
import styled from 'styled-components';

import { COLOR } from 'config';

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  max-height: 100%;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  display: block; 
  background-color: ${COLOR.dark};
`;

class CanvasBg extends React.Component {
  componentDidMount = () => {
    const waitForAnimationInit = () => {
      if (window.initialized) {
        window.startAnimation();
      }
      else {
        setTimeout(() => {
          waitForAnimationInit();
        }, 500);
      }
    };

    waitForAnimationInit();
  }
  shouldComponentUpdate = () => {
    return false;
  }
  render() {
    return (
      <Wrapper>
        <Canvas id="bgCanvas" ref={(ref) => { this.canvas = ref; }} width="1400" height="710" />
      </Wrapper>
    );
  }
}

export default CanvasBg;
