import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Button from 'components/Button';

import miner1 from './miner1.png';
/* eslint-disable global-require */
const miners = [
  require('./miner2.png'),
  require('./miner3.png'),
  require('./miner4.png'),
  require('./miner5.png'),
];
/* eslint-enable global-require */

const Graphic = styled.img.attrs({
  src: props => props.src,
})`
  display: block;
  width: 100%;
`;

const MinersWrapper = styled(Flex)`
  height: 100%;
`;
const StyledBox = styled(Box)`
  // flex: 1 0 auto;
  position: relative;
`;

const Miners = styled(Flex)`
  flex-grow: 1;
  min-height: 100%;

  ${StyledBox}:nth-child(1) {
    width: 37%;
    div {
      background: url(${miners[0]}) center center no-repeat;
      background-size: cover;
    }
  }
  ${StyledBox}:nth-child(2) {
    width: 63%;
    div {
      background: url(${miners[1]}) center center no-repeat;
      background-size: cover;
    }
  }
  ${StyledBox}:nth-child(3) {
    width: 63%;
    div {
      background: url(${miners[2]}) center center no-repeat;
      background-size: cover;
    }
  }
  
  ${StyledBox}:nth-child(4) {
    width: 37%;
    div {
      background: url(${miners[3]}) center center no-repeat;
      background-size: cover;
    }
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const GraphicItem = ({ i }) => (
  <StyledBox p={3}>
    <ImgWrap />
  </StyledBox>
);

const MinersSection = styled.div`
  height: 100%;
  padding-top: 44.6%;
  position: relative;
`;

const MinersContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`;

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
      <SubHeading fontSize={2}>
        <FormattedMessage id="home.miner.subheading" />
      </SubHeading>

      <MinersSection>
        <MinersContent>
          <MinersWrapper align="stretch" column wrap mx={-3}>
            <Box width={1 / 3} px={3}>
              <Graphic src={miner1} />
            </Box>
            <Miners row wrap width={2 / 3} my={-3}>
              {miners.map((item, i) => <GraphicItem key={i} i={i} />)}
            </Miners>
          </MinersWrapper>
        </MinersContent>
      </MinersSection>

      <Flex align="flex-end" column wrap>
        <Button to="/" color="white" bg="base" big width={'200px'} pill mt={5} >
          <FormattedMessage id="home.miner.link" />
        </Button>
      </Flex>
    </Container>
  </Box>
);

export default Miner;
