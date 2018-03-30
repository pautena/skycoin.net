import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import media from 'utils/media';

const MinersWrapper = styled(Flex)`
  height: 100%;
  flex-wrap: wrap;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  
  ${media.sm.css`
    flex-wrap: nowrap;  
  `}
`;

const MainImageBox = styled(Box)`
  height: 100%;
  overflow: hidden;
`;

const StyledBox = styled(Box)`
  position: relative;
`;

const ImgWrap = styled.div`
  width: 100%;
  background: url(${props => props.img}) 0 0 no-repeat;
  background-size: cover;
`;

const Miners = styled(Flex)`
  flex-grow: 1;
  min-height: 100%;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  
  position: relative;
  
  ${ImgWrap} {
    position: relative;
    height: 0;
    
    ${media.sm.css`
      height: 100%;
    `}
    
  }

  ${StyledBox}:nth-child(1){
    width: 50%;
    order: 1;
    
    
    ${media.sm.css`
      width: 37%;
    `}
  
    ${ImgWrap} {
      padding-top: 91.6%;
    }
  }
  ${StyledBox}:nth-child(4) {
    width: 50%;
    order: 2;
    
    ${media.sm.css`
      width: 37%;
      order: 4;
    `}
  
    ${ImgWrap} {
      padding-top: 91.6%;
    }
  }
  ${StyledBox}:nth-child(2) {
    width: 100%;
    order: 3;
    
    ${media.sm.css`
      width: 63%;
      order: 2;
    `}
  
    ${ImgWrap} {
      padding-top: 53.4%;
    }
  }
  ${StyledBox}:nth-child(3) {
    width: 100%;
    order: 4;
    
    ${media.sm.css`
      width: 63%;
      order: 3;
    `}
  
    ${ImgWrap} {
      padding-top: 53.4%;
    }
  }
  
  ${StyledBox}:nth-child(1),
  ${StyledBox}:nth-child(2),
  ${StyledBox}:nth-child(3),
  ${StyledBox}:nth-child(4) {
    ${ImgWrap} {
      ${media.sm.css`
        padding-top: 0;
      `}
    }
  }
`;

const Graphic = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const GraphicItem = ({ src }) => (
  <StyledBox p={3}>
    <ImgWrap img={src} />
  </StyledBox>
);

GraphicItem.propTypes = {
  src: PropTypes.string.isRequired,
};

const Gallery = ({ imgMain, imgList, reverse }) => (
  <MinersWrapper align="stretch" reverse={reverse} mx={-3} my={6}>
    <MainImageBox width={[1, 1 / 3, 1 / 3]} px={3}>
      <Graphic src={imgMain} />
    </MainImageBox>
    <Miners wrap width={[1, 2 / 3, 2 / 3]} my={[3, -3, -3]} reverse={reverse}>
      {imgList.map((item, i) => <GraphicItem key={i} src={item} />)}
    </Miners>
  </MinersWrapper>
);

Gallery.propTypes = {
  imgMain: PropTypes.string.isRequired,
  imgList: PropTypes.arrayOf(PropTypes.string).isRequired,
  reverse: PropTypes.bool,
};

Gallery.defaultProps = {
  reverse: false,
};

export default Gallery;
