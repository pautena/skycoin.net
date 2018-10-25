import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import media from 'utils/media';

const StyledBox = styled(Box)`
  position: relative;
`;

const ImgWrap = styled.div`
  width: 100%;
  background: url(${props => props.img}) 0 0 no-repeat;
  background-size: cover;
`;

const GalleryWrapper = styled(Flex)`
  position: relative;
  min-height: 100%;  
  
  ${ImgWrap} {
    position: relative;
    height: 0;
  }

  ${StyledBox}:nth-child(1) {
    width: 100%;
    
    ${media.sm.css`
      width: 33%;
    `}
  
    ${ImgWrap} {
      padding-top: 68.6%;
    }
  }
  
  ${StyledBox}:nth-child(4) {
    width: 100%;
    order: 4;
    
    ${media.sm.css`
      width: 33%;
      order: 5;
    `}
  
    ${ImgWrap} {
      padding-top: 68.6%;
    }
  }
  
  ${StyledBox}:nth-child(2) {
      width: 50%;
    
    ${media.sm.css`
      width: 24%;
    `}
  
    ${ImgWrap} {
      padding-top: 97.6%;
    }
  
  }
  
  ${StyledBox}:nth-child(6) {
    width: 50%;
    order: 3;    
    
    ${media.sm.css`
      width: 24%;
      order: 6;
    `}
  
    ${ImgWrap} {
      padding-top: 97.6%;
    }
  }
  
  ${StyledBox}:nth-child(3) {
    width: 100%;
    order: 4;
    
    ${media.sm.css`
      width: 43%;
      order: 3;
    `}
  
    ${ImgWrap} {
      padding-top: 52%;
    }
  }
  
  ${StyledBox}:nth-child(5) {
    width: 100%;
    order: 6;
    
    ${media.sm.css`
      width: 43%;
      order: 5;
    `}
  
    ${ImgWrap} {
      padding-top: 52%;
    }
  }
`;

const GraphicItem = ({ src }) => (
  <StyledBox p={3}>
    <ImgWrap img={src} />
  </StyledBox>
);

GraphicItem.propTypes = {
  src: PropTypes.string.isRequired,
};

const Gallery = ({ imgList }) => (
  <GalleryWrapper wrap mx={-3} my={3}>
    {imgList.map((item, i) => <GraphicItem key={i} src={item} />)}
  </GalleryWrapper>
);

Gallery.propTypes = {
  imgList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Gallery.defaultProps = {
  reverse: false,
};

export default Gallery;
