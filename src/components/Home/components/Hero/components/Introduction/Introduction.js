import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
<<<<<<< HEAD
import { rem, rgba } from 'polished';

import Button from 'components/Button';
import Buy from 'components/Buy';
import Heading from 'components/Heading';
import { Flex, Box } from 'grid-styled';
import media from 'utils/media';

import { FONT_FAMILIES, COLOR, SPACE, FONT_SIZES } from 'config';

const Paragraph = styled.p`
  font-size: ${rem(FONT_SIZES[3])};
  color: ${COLOR.white};
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 1.5rem;
  text-transform: none;
`;

const Intro = styled.div`
  padding: ${rem(SPACE[5])} ${rem(SPACE[7])};
  margin: 0 -${rem(SPACE[7])};
  
  ${media.sm.css`
    padding: ${rem(SPACE[5])} ${rem(SPACE[7])};  
    background-color: ${rgba(COLOR.dark, 0.9)};
  `}
  
  ${media.md.css`
    margin-right: 0;
  `}
`;

const Introduction = () => (
  <Flex wrap row px={0} mx={-5} pt={[0, 0, 9]}>
    <Box width={[1, 1, 2 / 3]} px={5} mb={[0, 4, 4]}>
      <Intro>
        <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={7}>
          <FormattedMessage id="home.hero.heading" values={{ break: <br /> }} />
        </Heading>
        <Paragraph>
          <FormattedMessage id="home.hero.paragraph" />
        </Paragraph>
      </Intro>
    </Box>
    <Flex column align="center" width={[1, 1, 1 / 3]} px={5} pt={[0, 5, 7]}>
      <Buy color="white" bg="base" xxl width={'100%'} pill>
        <FormattedMessage id="home.hero.buy" />
      </Buy>
      <Button to="downloads" color="base" bg="white" xxl width={'100%'} pill mt={5} >
        <FormattedMessage id="home.hero.wallet.get" />
      </Button>
    </Flex>
  </Flex>
=======

import Button from 'components/Button';
import Buy from 'components/Buy';
import Heading from 'components/Heading';
import { Flex, Box } from 'grid-styled';

import { FONT_FAMILIES } from 'config';

const Paragraph = styled.p`
  font-size: 1.125em;
  color: #ffffff;
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 0.5em;
  text-transform: none;
`;

const Introduction = () => (
  <div>
    <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={7}>
      <FormattedMessage id="home.hero.heading" values={{ break: <br /> }} />
    </Heading>
    <Paragraph>
      <FormattedMessage id="home.hero.paragraph" />
    </Paragraph>
    <Flex wrap row pt={6}>
      <Box width={[1 / 2, 1, 1 / 2]} pr={[1, 0, 4]} mb={[8, 4, 4]}>
        <Buy
          color="blue.5"
          bg="white"
          big
          fontSize={[1, 3]}
          width={[1, 1 / 2, 1]}
        >
          <FormattedMessage id="home.hero.buy" />
        </Buy>
      </Box>
      <Box width={[1 / 2, 1, 1 / 2]} pl={[1, 0, 4]}>
        <Button
          to="downloads"
          color="blue.5"
          bg="white"
          big
          fontSize={[1, 3]}
          width={[1, 1 / 2, 1]}
        >
          <FormattedMessage id="home.hero.wallet.get" />
        </Button>
      </Box>
    </Flex>
  </div>
>>>>>>> master
);

export default Introduction;
