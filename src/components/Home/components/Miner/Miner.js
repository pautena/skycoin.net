import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Button from 'components/Button';

import { BOX_SHADOWS, BORDER_RADIUS } from 'config';

/* eslint-disable global-require */
const miners = [
  require('./img1.jpg'),
  require('./img2.jpg'),
  require('./img3.jpg'),
  require('./img4.jpg'),
  require('./img5.jpg'),
  require('./img6.jpg'),
];
/* eslint-enable global-require */

const Graphic = styled.img.attrs({
  src: props => props.src,
})`
  display: block;
  width: 100%;
  box-shadow: ${BOX_SHADOWS.box};
  border-radius: ${BORDER_RADIUS.base};
`;

const GraphicItem = ({ i }) => (
  <Box width={[1, 1 / 2, 1 / 3]} px={2} py={2}>
    <Graphic src={miners[i]} />
  </Box>
);

const Miner = () => (
  <Box my={13}>
    <Container>
      <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6]} color="black">
        <FormattedMessage id="home.miner.heading" />
      </Heading>
      <SubHeading fontSize={2}>
        <FormattedMessage id="home.miner.subheading" />
      </SubHeading>
      <Flex align="center" wrap mx={[-2]} mt={8} mb={10}>
        {miners.map((item, i) => <GraphicItem key={i} i={i} />)}
      </Flex>
      <Flex align="flex-end" column wrap>
        <Button to="/" color="white" bg="base" big width={'200px'} pill mt={5} >
          <FormattedMessage id="home.miner.link" />
        </Button>
      </Flex>
    </Container>
  </Box>
);

export default Miner;
