import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Navigation from 'components/Navigation';
import Languages from 'components/Languages';
import Text from 'components/Text';
import Logo from 'components/Logo';
import { COLOR, SPACE } from 'config';
import media from 'utils/media';

import Email from './components/Email';
import Social from './components/Social';
import PageLinks from './components/PageLinks';

const COPYRIGHT = '© Skycoin.net 2019';
const RIGHTS_RESERVED = 'footer.rightsReserved';

const Wrapper = styled.div`
  background: ${COLOR.dark};
`;

const FooterNavWrapper = styled(Flex)`
  flex-direction: column;
  padding-bottom: ${rem(SPACE[6])};
  
  ${media.sm.css`
    flex-direction: row;
    align-items: center;
    padding-bottom: ${rem(SPACE[12])};
  `}
`;

const NavigationWrapper = styled.div`
  display:none;
  ${media.sm.css`
    display:block;
  `}
`;

const Footer = ({ isLanding }) => (
  <Wrapper>
    <Container>
      <FooterNavWrapper
        align="flex-start"
        justify="space-between"
        wrap
        pt={[8, 13]}
        isLanding={isLanding}
      >
        <Logo blueWhite />
        {!isLanding && <NavigationWrapper><Navigation white /></NavigationWrapper>}
        {isLanding &&
        <Text fontSize={[1, 1, 2]} color="gray.8" my={0} textAlign="center">
          <Email />
        </Text>
        }
      </FooterNavWrapper>

      <Social />

      {!isLanding &&
      <Flex py={[6, 8]} wrap>
        <Box width={[1, 1, 1 / 6]}>
          <Text fontSize={[1, 1, 2]} color="gray.8" my={0} textAlign={['center', 'center', 'left']}>
            {COPYRIGHT}
          </Text>
        </Box>
        <Box width={[1, 1, 1 / 6]}>
          <Text fontSize={[1, 1, 2]} color="gray.8" my={0} textAlign={['center', 'center', 'left']}>
            <FormattedMessage id={RIGHTS_RESERVED} />
          </Text>
        </Box>
        <Box width={[1, 1, 1 / 3]}>
          <Text fontSize={[1, 1, 2]} color="gray.8" my={0} textAlign="center">
            <Email />
          </Text>
        </Box>

        <Box width={[1, 1, 1 / 3]}>
          <Text
            as="div"
            fontSize={[0, 0, 1]}
            color="gray.8"
            my={0}
            heavy
            textAlign={['center', 'center', 'right']}
          >
            <Languages />
          </Text>
        </Box>
      </Flex>
      }
      {isLanding &&
      <Flex py={[6, 8]} wrap>
        <Box width={1}>
          <Text fontSize={[1, 1, 2]} color="gray.8" my={0} textAlign="center">{COPYRIGHT}</Text>
        </Box>
      </Flex>
      }
      <PageLinks />
    </Container>
  </Wrapper>
);

Footer.propTypes = {
  isLanding: PropTypes.bool,
};

Footer.defaultProps = {
  isLanding: false,
};


export default Footer;
