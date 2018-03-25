import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Button from 'components/Button';
import media from 'utils/media';

import miner1 from './miner1.png';
/* eslint-disable global-require */
const miners = [
  require('./miner2.png'),
  require('./miner3.png'),
  require('./miner4.png'),
  require('./miner5.png'),
];
/* eslint-enable global-require */

const MinersWrapper = styled(Flex)`
  height: 100%;
  flex-wrap: wrap;
  
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
  background-size: contain;
  background: url(${props => props.img}) center center no-repeat;
`;

const Miners = styled(Flex)`
  flex-grow: 1;
  min-height: 100%;
  
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

const GraphicItem = ({ i }) => (
  <StyledBox p={3}>
    <ImgWrap img={miners[i]} />
  </StyledBox>
);

GraphicItem.propTypes = {
  i: PropTypes.number,
};

GraphicItem.defaultProps = {
  i: 0,
};

const Miner = () => (
  <Box my={13}>
    <Container>
      <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6, 7]} color="black">
        <FormattedMessage id="home.miner.heading" />
      </Heading>
      <Heading fontSize={2}>
        <FormattedMessage id="home.miner.subheading" />
      </Heading>

      <Box my={[7, 8, 10]}>
        <MinersWrapper align="stretch" row mx={-3}>
          <MainImageBox width={[1, 1 / 3, 1 / 3]} px={3}>
            <Graphic src={miner1} />
          </MainImageBox>
          <Miners row wrap width={[1, 2 / 3, 2 / 3]} my={[3, -3, -3]}>
            {miners.map((item, i) => <GraphicItem key={i} i={i} />)}
          </Miners>
        </MinersWrapper>
      </Box>

      <Flex align="flex-end" column wrap>
        <Button to="/" color="white" bg="base" big width={'200px'} pill >
          <FormattedMessage id="home.miner.link" />
        </Button>
      </Flex>
    </Container>
  </Box>
);

export default Miner;
