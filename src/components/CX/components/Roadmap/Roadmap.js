import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import Container from 'components/Container';
import Heading from 'components/Heading';
import media from 'utils/media';

import devRoadmap from './CX.svg';
import devRoadmapSm from './CX_mobile.svg';

const Graphic = styled.img.attrs({
  src: props => props.src,
}) `
  display: ${props => (props.mobile ? 'block' : 'none')};
  width: calc(100% - 25px);
  padding-left: ${props => (props.mobile ? '0' : '25px')};
  
  ${media.sm.css`
    display: ${props => (props.mobile ? 'none' : 'block')};
  `}
`;

const Wrap = styled(Box)`
  background-color: #fcfcfc;
  padding-top: 20px;

  ${media.sm.css`
    background-color: transparent;
    padding-top: 0;
  `}
`;


const Roadmap = () => (
  <Container>
    <Wrap pb={[8, 12]} mb={[4, 12]}>
      <Heading heavy as="h2" fontSize={[6, 7]} width={[1, 2 / 3]} my={[6, 10, 12]} color="black" pl={7}>
        <FormattedMessage id="cx.roadmap" />
      </Heading>
      <Graphic src={devRoadmap} />
      <Graphic src={devRoadmapSm} mobile />
    </Wrap>
  </Container>
);

export default Roadmap;
