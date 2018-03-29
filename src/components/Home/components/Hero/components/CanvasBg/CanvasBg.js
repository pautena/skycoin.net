import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { COLOR } from 'config';
import media from 'utils/media';

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-height: 100%;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${rgba(COLOR.dark, 0.9)};
  
  ${media.sm.css`
    background: transparent;
  `}
`;

class CanvasBg extends React.Component {
  componentDidMount() {
    const waitForAnimationInit = () => {
      if (window.initialized) {
        window.startAnimation();
      } else {
        setTimeout(() => {
          waitForAnimationInit();
        }, 500);
      }
    };

    waitForAnimationInit();
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <Wrapper>
        <canvas id="bgCanvas" ref={(ref) => { this.canvas = ref; }} width="1400" height="710" />
        <Overlay />
      </Wrapper>
    );
  }
}

export default CanvasBg;
