import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import Container from 'components/Container';
import Heading from 'components/Heading';
import media from 'utils/media';

import devRoadmap from './roadmap_desktop.svg';
import devRoadmapSm from './roadmap_mobile.svg';
// import marketingRoadmap from './marketing_roadmap.svg';
// import marketingRoadmapSm from './mobile_marketing_roadmap.svg';

const Graphic = styled.img.attrs({
  src: props => props.src,
})`
  display: ${props => (props.mobile ? 'block' : 'none')};
  width: 100%;
  
  ${media.sm.css`
    display: ${props => (props.mobile ? 'none' : 'block')};
  `}
`;


const Roadmap = () => (
  <Container>
    <Box pt={[6, 10]} pb={8}>
      <Heading heavy as="h2" fontSize={[6, 7]} width={[1, 2 / 3]} my={[6, 10, 12]} color="black">
        <FormattedMessage id="ecosystem.roadmap.dev.heading" />
      </Heading>
      <Graphic src={devRoadmap} />
      <Graphic src={devRoadmapSm} mobile />
    </Box>
    {/* <Box pt={[6, 10]} pb={[0, 8]}> */}
    {/* <Heading */}
    {/* heavy */}
    {/* as="h2" */}
    {/* fontSize={[6, 7]} */}
    {/* width={[1, 2 / 3]} */}
    {/* my={[6, 10, 12]} */}
    {/* color="black" */}
    {/* > */}
    {/* <FormattedMessage id="ecosystem.roadmap.marketing.heading" /> */}
    {/* </Heading> */}
    {/* <Graphic src={marketingRoadmap} /> */}
    {/* <Graphic src={marketingRoadmapSm} mobile /> */}
    {/* </Box>*/}
  </Container>
);

export default Roadmap;
