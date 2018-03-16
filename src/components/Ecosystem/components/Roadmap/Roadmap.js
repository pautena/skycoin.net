import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import Container from 'components/Container';
import Heading from 'components/Heading';

import devRoadmap from './development_roadmap.svg';

const Graphic = styled.img.attrs({
  src: props => props.src,
})`
  display: block;
  width: 100%;
`;


const Roadmap = () => (
  <Box pt={[6, 10]} pb={[0, 8]}>
    <Container>
      <Heading heavy as="h2" fontSize={[6, 7]} width={[1, 2 / 3]} my={[6, 10, 12]} color="black">
        <FormattedMessage id="ecosystem.roadmap.heading" />
      </Heading>
      <Graphic src={devRoadmap} />
    </Container>
  </Box>
);

export default Roadmap;
