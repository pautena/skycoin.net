import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { COLOR } from 'config';
import media from 'utils/media';
import * as createjs from 'createjs-module';

import { lib } from './skyminer_animation';

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
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

class Animation extends React.Component {
  componentDidMount() {
    /* eslint-disable */
    this.canvas = document.getElementById("canvasSkyminerAnim");
    createjs.MotionGuidePlugin.install();
    this.handleComplete();
    
     /* eslint-enable */
  }
  shouldComponentUpdate() {
    return false;
  }

  handleComplete() {
    /* eslint-disable */
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var exportRoot = new lib.skyminer_anim();
    var stage = new createjs.Stage(this.canvas);
    stage.addChild(exportRoot);	
    //Registers the "tick" event listener.
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);	    
    //Code to support hidpi screens and responsive scaling.
    (function(canvas, isResp, respDim, isScale, scaleType) {		
      var lastW, lastH, lastS=1;		
      window.addEventListener('resize', resizeCanvas);		
      resizeCanvas();		
      function resizeCanvas() {			
        var w = lib.properties.width, h = lib.properties.height;			
        var iw = window.innerWidth, ih=window.innerHeight;			
        var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
        if(isResp) {                
          if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
            sRatio = lastS;                
          }				
          else if(!isScale) {					
            if(iw<w || ih<h)						
              sRatio = Math.min(xRatio, yRatio);				
          }				
          else if(scaleType==1) {					
            sRatio = Math.min(xRatio, yRatio);				
          }				
          else if(scaleType==2) {					
            sRatio = Math.max(xRatio, yRatio);				
          }			
        }			
        canvas.width = w*pRatio*sRatio;			
        canvas.height = h*pRatio*sRatio;
        canvas.style.width = w*sRatio+'px';			
        canvas.style.height = h*sRatio+'px';
        stage.scaleX = pRatio*sRatio;			
        stage.scaleY = pRatio*sRatio;			
        lastW = iw; lastH = ih; lastS = sRatio;		
      }
    })(this.canvas, false,'both',false,1);	
    /* eslint-enable */
  }

  render() {
    return (
      <Wrapper>
        <canvas
          id="canvasSkyminerAnim"
          ref={(ref) => { this.canvas = ref; }}
          width="1400"
          height="710"
        />
        <Overlay />
      </Wrapper>
    );
  }
}

export default Animation;
