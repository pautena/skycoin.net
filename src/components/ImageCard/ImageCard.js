import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';


import { rem } from 'polished';
import media from 'utils/media';
import { COLOR, SPACE } from 'config';

const Icon = styled.img.attrs({
    src: props => props.src,
  })`
    display: block;
    max-width: 100%;
    height: auto;
    margin-bottom: ${rem(SPACE[4])};
    
    ${media.sm.css`
      margin-bottom: 0;  
    `}
  `;
  
const CardWrapper = styled(Flex)`
    flex-direction:${props => props.flexDirection};
    background: ${COLOR.white};
    margin: 4rem 0 4rem 0;
    padding: 0;
    
    a {
      color: ${COLOR.base};
      text-decoration: none;
    }
  `;
  

const Column = styled(Flex)`
    flex-direction: column;
    padding: 2rem;
  `;

const ImageCard = ({children,image,flexDirection}) => {
    return (
        <CardWrapper p={7} mx={[-7, 0]} wrap align="center" flexDirection={flexDirection}>
            {image}
            <Box width={[1, 1 / 2]}>
                <Column p={1}>
                    {children}
                </Column>
            </Box>
        </CardWrapper>
    )
}

ImageCard.propTypes = {

};

ImageCard.defaultProps = {
    flexDirection:'row'
}

export default ImageCard;


const ImageWrapper = styled(Flex)`
    background: ${COLOR.dark};
    height: ${props => props.height};
    align-items: center;
    
    img {
      height: 60%;
    }`;

export const ImageContainer  = ({height,image}) =>{
    return (
        <ImageWrapper width={[1, 1 / 2]} justify="center" px={5} height={height}>
            <Icon src={image} />
        </ImageWrapper>
    );
}

const ImageFullWrapper = styled(Flex)`
    height: ${props => props.height};
    align-items: center;
    padding:0;
    `;

export const ImageFullContainer  = ({height,image}) =>{
    return (
        <ImageFullWrapper width={[1, 1 / 2]} justify="center" px={5}>
            <Icon src={image} />
        </ImageFullWrapper>
    );
};